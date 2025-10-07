import type { NextConfig, Redirect } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // dangerouslyAllowSVG: true
  },

  async redirects() {
    return [
      {
        source: "/joincommunity",
        destination: "https://tally.so/r/nWZpLa",
        permanent: true  
      }
    ] 
  },
  eslint: {
    ignoreDuringBuilds: true //temporarily
  }
};

export default nextConfig;
