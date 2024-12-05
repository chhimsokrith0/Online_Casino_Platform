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

// /** @type {import('next').NextConfig} */
// import createNextIntlPlugin from "next-intl/plugin";

// const withNextIntl = createNextIntlPlugin();

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: ["res.cloudinary.com"], // Add external image domains here
//   },
//   webpack: (config) => {
//     // Enable importing image file types dynamically
//     config.module.rules.push({
//       test: /\.(png|jpg|jpeg|webp|gif)$/i, // Regex for image extensions
//       type: "asset/resource", // Ensures files are handled as static assets
//     });
//     return config; // Return the modified configuration
//   },
// };

// export default withNextIntl(nextConfig);
