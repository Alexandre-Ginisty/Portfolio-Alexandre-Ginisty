/** @type {import('next').NextConfig} */
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
  // Set basePath for GitHub Pages (repo name)
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  // Improves compatibility with GitHub Pages routing
  trailingSlash: true,
}

module.exports = nextConfig
