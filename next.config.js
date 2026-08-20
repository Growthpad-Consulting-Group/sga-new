/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Native-binding packages used to render PDF cover thumbnails server-side
  // (app/api/webhooks/certificate-cover) — must stay external to Next's
  // bundler or their compiled .node files fail to resolve at runtime.
  serverExternalPackages: ['@napi-rs/canvas', 'pdfjs-dist'],
  // pdfjs-dist resolves its worker script (pdf.worker.mjs) at runtime via a
  // dynamic URL, which Vercel's output file tracing can't detect statically
  // — so the file gets left out of the deployed function bundle unless we
  // force-include it here.
  outputFileTracingIncludes: {
    '/api/webhooks/certificate-cover': ['./node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig

