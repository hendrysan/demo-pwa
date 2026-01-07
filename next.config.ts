// Import dotenv to load environment variables
require("dotenv").config();

/** @type {import('next').NextConfig} */

// Check if the environment is production
const isProd = process.env.NODE_ENV === "production";

// Define caching strategies for PWA
const runtimeCaching = [
  {
    urlPattern: /^https:\/\/(.*)\/_next\/.*$/,
    handler: "NetworkFirst",
    options: {
      cacheName: "next-assets",
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 * 24 * 30, // Cache for 30 days
      },
    },
  },
  {
    urlPattern: /^https:\/\/(.*)\/api\/.*$/,
    handler: "NetworkFirst",
    options: {
      cacheName: "api-cache",
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
      },
    },
  },
  {
    urlPattern: /^https:\/\/jsonplaceholder.typicode.com\/posts/,
    handler: "NetworkFirst", // Always try to fetch from the network, then fallback to cache
    options: {
      cacheName: "posts-cache", // Name of the cache to store posts
      expiration: {
        maxEntries: 50, // Maximum number of cached entries
        maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
      },
    },
  },
  {
    urlPattern: /^https:\/\/jsonplaceholder.typicode.com\/users/,
    handler: "NetworkFirst", // Always try to fetch from the network, then fallback to cache
    options: {
      cacheName: "users-cache",
      expiration: {
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24, // Cache for 1 day
      },
    },
  },
];

const withPWA = require("next-pwa")({
  dest: "public", // Directory where the PWA files will be exported
  disable: !isProd, // Enable PWA in all environments (remove disable condition)
  runtimeCaching, // Define caching strategies
  buildExcludes: [
    /^(((app-)?build-manifest|react-loadable-manifest|dynamic-css-manifest)\.json)$/,
  ], // Exclude dynamic CSS files from PWA
});

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during production build
  },
  output: "standalone", // Use standalone build output for containerization
  turbopack: {}, // Enable turbopack (optional based on your setup)
};

module.exports = withPWA(nextConfig); // Export the configuration with PWA enabled
