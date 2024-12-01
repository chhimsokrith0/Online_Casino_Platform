/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["res.cloudinary.com"], // Add your external image domains here
    },
};

export default withNextIntl(nextConfig);
