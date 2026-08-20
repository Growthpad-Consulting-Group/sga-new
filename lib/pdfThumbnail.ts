import { createCanvas } from '@napi-rs/canvas'

/**
 * Renders the first page of a PDF to a JPEG buffer, entirely in Node
 * (no system binaries like poppler/ghostscript required — works on
 * Vercel serverless functions). Used to auto-generate cover thumbnails
 * for certificate/license documents uploaded in Sanity.
 */
export async function renderPdfFirstPageToJpeg(pdfBuffer: Uint8Array, targetWidth = 800): Promise<Buffer> {
  // Imported dynamically because pdfjs-dist's legacy Node build touches
  // DOMMatrix/Path2D globals on load, which we only want to set up when
  // this function actually runs (not at module-import time).
  const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs')

  const loadingTask = getDocument({
    data: pdfBuffer,
    useSystemFonts: true,
    disableFontFace: true,
  })
  const pdf = await loadingTask.promise

  try {
    const page = await pdf.getPage(1)
    const baseViewport = page.getViewport({ scale: 1 })
    const scale = targetWidth / baseViewport.width
    const viewport = page.getViewport({ scale })

    const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height))
    const context = canvas.getContext('2d')

    await page.render({
      canvas: canvas as unknown as HTMLCanvasElement,
      canvasContext: context as unknown as CanvasRenderingContext2D,
      viewport,
    }).promise

    return canvas.toBuffer('image/jpeg', 0.85)
  } finally {
    await loadingTask.destroy()
  }
}
