// /** @type {import('next').NextConfig} */

// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com"], // Add your external image domains here
//   },
// };

// export default withNextIntl(nextConfig);






/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
import path from "path";
import { fileURLToPath } from "url";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"], // Add your external image domains here
  },
  webpack: (config) => {
    // Use `path.resolve` to handle ESM-based resolution
    const mswPath = path.resolve(
      path.dirname(fileURLToPath(import.meta.url)),
      "node_modules",
      "msw",
      "lib",
      "browser"
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      "msw/browser": mswPath,
    };

    return config;
  },
};

export default withNextIntl(nextConfig);
