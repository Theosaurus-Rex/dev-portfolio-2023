/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [],
  },
  experimental: {
    optimizeServerReact: true,
    optimizeCss: {
      inlineFonts: false,
    },
  },
  optimizeFonts: true,
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
