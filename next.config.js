/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/test' : '';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  output: 'export',
  // Unterverzeichnis für längere Testphase
  basePath,
  assetPrefix: basePath ? basePath + '/' : '',
  // trailingSlash removed to prevent potential dev CSS asset 404s; static export still works without it
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

module.exports = nextConfig;
