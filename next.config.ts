const { InjectManifest } = require("workbox-webpack-plugin"); // Import InjectManifest

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  swSrc: "service-worker/sw.js", // Path ke sw.js kustom Anda
  scope: "/",
  buildExcludes: [/middleware-manifest\.json$/, /app-build-manifest\.json$/],
});

module.exports = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Menggunakan InjectManifest untuk mengonfigurasi service worker
      config.plugins.push(
        new InjectManifest({
          swSrc: "./service-worker/sw.js", // Path ke file sw.js Anda
          swDest: "sw.js", // Nama output file untuk service worker
        })
      );
    }
    return config;
  },
  ...withPWA({
    output: "standalone",
  }),
};
