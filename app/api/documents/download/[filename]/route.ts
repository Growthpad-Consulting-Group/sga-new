import { NextRequest, NextResponse } from 'next/server'

// Proxies a Sanity-hosted file through our own origin so:
//   1. the browser's `download` attribute actually forces a save
//      (cross-origin download attributes are ignored by browsers), and
//   2. the built-in PDF viewer / download prompt shows the real document
//      title instead of Sanity's hash-named asset filename — the [filename]
//      segment puts that name directly in the URL path, since some browsers
//      fall back to the URL rather than reliably reading Content-Disposition.
export async function GET(request: NextRequest, { params }: { params: Promise<{ filename: string }> }) {
    const { filename } = await params
    const fileUrl = request.nextUrl.searchParams.get('url')
    // "inline" lets the browser's built-in PDF viewer show the file; "attachment" (default) forces a download.
    const disposition = request.nextUrl.searchParams.get('disposition') === 'inline' ? 'inline' : 'attachment'

    if (!fileUrl || !fileUrl.startsWith('https://cdn.sanity.io/')) {
        return NextResponse.json({ error: 'Invalid file URL' }, { status: 400 })
    }

    const res = await fetch(fileUrl)
    if (!res.ok || !res.body) {
        return NextResponse.json({ error: 'Failed to fetch file' }, { status: 502 })
    }

    return new NextResponse(res.body, {
        headers: {
            'Content-Type': res.headers.get('content-type') || 'application/pdf',
            'Content-Disposition': `${disposition}; filename="${decodeURIComponent(filename).replace(/"/g, '')}"`,
        },
    })
}
