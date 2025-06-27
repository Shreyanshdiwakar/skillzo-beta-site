import type { NextConfig, Redirect } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remotePatterns: [new URL("https://placehold.co/**")],
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
