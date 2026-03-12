import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/gold-pm-poc",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
