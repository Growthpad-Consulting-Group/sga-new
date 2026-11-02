/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The native canvas binding used by the certificate-cover webhook must
  // stay external so its compiled .node files resolve at runtime. PDF.js is
  // intentionally bundled because v6 is ESM and cannot be loaded through
  // the CommonJS require() used for serverExternalPackages.
  serverExternalPackages: ['@napi-rs/canvas'],
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

