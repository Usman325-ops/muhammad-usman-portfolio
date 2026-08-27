import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/muhammad-usman-portfolio",
  assetPrefix: "/muhammad-usman-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
