import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import {
  CacheFirst,
  NetworkFirst,
  StaleWhileRevalidate,
} from "workbox-strategies";

// Precache file yang perlu dipertahankan di cache
precacheAndRoute(self.__WB_MANIFEST);

// Konfigurasi caching khusus untuk URL tertentu
registerRoute(
  /^https:\/\/fonts\.googleapis\.com\/.*/i,
  new CacheFirst({
    cacheName: "google-fonts-cache",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 4,
        maxAgeSeconds: 365 * 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif)$/i,
  new CacheFirst({
    cacheName: "images-cache",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 64,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  /^http:\/\/localhost:3000\/.*/i,
  new NetworkFirst({
    cacheName: "pages-cache",
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  /\.(?:js|css)$/i,
  new StaleWhileRevalidate({
    cacheName: "static-resources",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);

registerRoute(
  /^https:\/\/demo-pwa-be-main-8sjlfw\.laravel\.cloud\/api\/.*$/i,
  new NetworkFirst({
    cacheName: "api-cache",
    networkTimeoutSeconds: 10,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  })
);
