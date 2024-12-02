/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["res.cloudinary.com"], // Add your external image domains here
    },
    "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/assets/*": ["assets/*"],
      "@/components/*": ["components/*"]
    }
  }
};

export default withNextIntl(nextConfig);
