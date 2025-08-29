// Keep config untyped so we can include newer keys like `allowedDevOrigins` safely
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Allow dev origins to access /_next resources when previewing via local IP
  // Update the list with any host:port you use from other devices.
  allowedDevOrigins: ['http://localhost:3000', 'http://192.168.211.71:3000'],
};

export default nextConfig;
