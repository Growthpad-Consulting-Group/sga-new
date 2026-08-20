import { NextRequest, NextResponse } from 'next/server'
import { createClient } from 'next-sanity'
import { renderPdfFirstPageToJpeg } from '@/lib/pdfThumbnail'

// Needs the Node.js runtime (not Edge) because @napi-rs/canvas is a
// native binding — pdf rendering can't run in the Edge runtime.
export const runtime = 'nodejs'
// PDF rendering can take a few seconds for large documents.
export const maxDuration = 60

interface WebhookPayload {
  _id?: string
  _type?: string
}

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  if (!process.env.SANITY_WEBHOOK_SECRET || secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const token = process.env.SANITY_API_TOKEN
  if (!token) {
    console.error('Missing SANITY_API_TOKEN')
    return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
  }

  const payload = (await request.json()) as WebhookPayload
  if (!payload._id || payload._type !== 'certificateDocument') {
    return NextResponse.json({ skipped: true })
  }

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  try {
    const doc = await client.fetch<{ _id: string; title: string; coverImage?: unknown; fileUrl?: string }>(
      `*[_id == $id][0]{ _id, title, coverImage, "fileUrl": file.asset->url }`,
      { id: payload._id }
    )

    if (!doc) {
      return NextResponse.json({ error: 'Document not found' }, { status: 404 })
    }

    // Don't clobber a cover image someone uploaded manually.
    if (doc.coverImage) {
      return NextResponse.json({ skipped: true, reason: 'coverImage already set' })
    }

    if (!doc.fileUrl) {
      return NextResponse.json({ skipped: true, reason: 'no file uploaded yet' })
    }

    const pdfRes = await fetch(doc.fileUrl)
    if (!pdfRes.ok) {
      throw new Error(`Failed to download PDF: HTTP ${pdfRes.status}`)
    }
    const pdfBuffer = new Uint8Array(await pdfRes.arrayBuffer())

    const jpeg = await renderPdfFirstPageToJpeg(pdfBuffer)

    const asset = await client.assets.upload('image', jpeg, {
      filename: `${doc._id}-cover.jpg`,
      contentType: 'image/jpeg',
    })

    await client
      .patch(doc._id)
      .set({
        coverImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
        },
      })
      .commit()

    return NextResponse.json({ success: true, title: doc.title })
  } catch (error) {
    console.error('Error generating certificate cover:', error)
    return NextResponse.json({ error: 'Failed to generate cover image' }, { status: 500 })
  }
}
