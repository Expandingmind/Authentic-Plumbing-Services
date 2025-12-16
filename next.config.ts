import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure static assets are properly served
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
