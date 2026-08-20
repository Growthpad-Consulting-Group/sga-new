import { NextRequest, NextResponse } from 'next/server'

// Proxies a Sanity-hosted file through our own origin so the browser's
// `download` attribute actually forces a save — cross-origin download
// attributes are ignored by browsers, which is why linking straight to
// cdn.sanity.io just opened a new tab instead of downloading.
export async function GET(request: NextRequest) {
    const fileUrl = request.nextUrl.searchParams.get('url')
    const filename = request.nextUrl.searchParams.get('filename') || 'document.pdf'
    // "inline" lets the browser's built-in PDF viewer show the real title
    // (used for the preview modal's iframe) instead of Sanity's hash-named
    // asset filename; "attachment" (default) forces an actual download.
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
            'Content-Disposition': `${disposition}; filename="${filename.replace(/"/g, '')}"`,
        },
    })
}
