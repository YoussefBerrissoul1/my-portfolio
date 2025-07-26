import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations de performance
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Compression des images
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },
  // Optimisation du bundle
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          three: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: 'three',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
  // Optimisations pour Vercel
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
