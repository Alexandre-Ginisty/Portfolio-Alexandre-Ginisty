/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repo = 'Portfolio'; // Remplacez par le nom de votre dépôt

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Désactivez le mode export pour le développement
  output: isProd ? 'export' : undefined,
  // Définissez le basePath pour la production
  basePath: isProd ? `/${repo}` : '',
  // Activez les trailing slashes pour GitHub Pages
  trailingSlash: true,
  // Configuration des images
  images: {
    unoptimized: true,
  },
  // Désactivez l'optimisation des images pour l'export
  ...(isProd && {
    images: {
      unoptimized: true,
    },
  }),
};

module.exports = nextConfig;
