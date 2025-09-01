/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // En développement, on ne veut pas de 'output: export'
  // output: 'export',
  // trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
