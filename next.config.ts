import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'youthful-panda-941.convex.cloud',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
      },
    ]  
  },
};

export default nextConfig;