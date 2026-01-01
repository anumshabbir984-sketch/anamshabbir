import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error: Turbopack layout config might be top-level in this version
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
