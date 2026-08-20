/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Native-binding packages used to render PDF cover thumbnails server-side
  // (app/api/webhooks/certificate-cover) — must stay external to Next's
  // bundler or their compiled .node files fail to resolve at runtime.
  serverExternalPackages: ['@napi-rs/canvas', 'pdfjs-dist'],
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

