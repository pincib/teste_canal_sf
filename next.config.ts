import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.kenlo.io",
      },
      {
        protocol: "https",
        hostname: "imgs.kenlo.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.pinciara.com.br",
      },
      {
        protocol: "https",
        hostname: "pinciara.com.br",
      },
    ],
  },
};

export default nextConfig;
