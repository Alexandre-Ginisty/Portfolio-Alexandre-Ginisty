/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Static export for GitHub Pages
  output: 'export',
  // Images must be unoptimized for static hosting
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  // Apply basePath/assetPrefix only in production when provided
  ...(isProd && basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  // Improves compatibility with GitHub Pages routing
  trailingSlash: true,
}

module.exports = nextConfig
