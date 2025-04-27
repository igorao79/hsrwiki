import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repositoryName = 'hsrwiki';

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  typescript: {
    // Игнорируем ошибки TypeScript при сборке для продакшена
    ignoreBuildErrors: true,
  },
  eslint: {
    // Игнорируем ошибки ESLint при сборке для продакшена
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  basePath: isProd ? `/${repositoryName}` : '',
  assetPrefix: isProd ? `/${repositoryName}/` : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: !isProd,
};

export default nextConfig;
