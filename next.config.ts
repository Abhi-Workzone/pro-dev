import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    qualities: [75, 85],
    
  },
  devIndicators: false,
  turbopack: {
    rules: {
      '*.svg': ['@svgr/webpack'],
    },
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.ignoreWarnings = [
        /THREE.Clock: This module has been deprecated/,
        /Please use THREE.Timer instead/,
      ];
    }
    return config;
  },
};

export default nextConfig;
