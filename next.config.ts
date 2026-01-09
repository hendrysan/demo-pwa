/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public", // Directory where the PWA files will be exported
  disable: !isProd, // Only enable PWA in production
  runtimeCaching, // Caching strategies
  buildExcludes: [/dynamic-css-manifest.json$/], // Exclude dynamic CSS files from PWA
});

const nextConfig = {
  // Other Next.js configuration options
  eslint: {
    // Disable ESLint during production build
    ignoreDuringBuilds: true,
  },
  output: "standalone", // Use standalone build output for containerization
};

module.exports = withPWA(nextConfig); // Export PWA-enabled config with Next.js config
