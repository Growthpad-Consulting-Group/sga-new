/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    agentUpgrade: 'security',
  },
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
  // Country about page moved from /[country]/why-us to /[country]/about
  async redirects() {
    return [
      { source: '/:country(ke|ug|tz)/why-us', destination: '/:country/about', permanent: true },
    ]
  },
  images: {
    // Keep optimized images cached for 30 days so they aren't re-transformed on every cache miss
    minimumCacheTTL: 60 * 60 * 24 * 30,
    // Fewer widths and one format mean fewer transformations per image
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [128, 256, 384],
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

