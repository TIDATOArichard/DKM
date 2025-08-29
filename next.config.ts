import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Allow development origin access for assets when testing from LAN/IP
  allowedDevOrigins: ['192.168.211.71'],
};

export default nextConfig;
