/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'Portfolio-Alexandre-Ginisty';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: isProd ? 'export' : undefined,
  basePath: isProd ? `/${repo}` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : '',
  },
};

module.exports = nextConfig;
