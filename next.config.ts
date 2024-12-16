import type { NextConfig } from "next";
const { i18n } = require('./next-i18next.config');
const nextConfig: NextConfig = {
  /* config options here */
  i18n,
  images: {
    domains: ['via.placeholder.com'], // Add your external image domain here
  },
};

export default nextConfig;
