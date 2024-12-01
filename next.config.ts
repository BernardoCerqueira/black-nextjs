import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'store.storeimages.cdn-apple.com'
    }]
  }
};

export default nextConfig;
