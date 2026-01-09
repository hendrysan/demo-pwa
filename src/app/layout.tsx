import "@/styles/globals.css";

import PWAInstallPrompt from "@/components/pwa-install-prompt";
import PWAServiceWorkerRegister from "@/components/pwa-service-worker-register";

export const metadata = {
  title: "Library App",
  description: "Library Application PWA",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon512.png",
    apple: "/icon512_maskable.png",
  },
};

export const viewport = {
  themeColor: "#6366F1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#6366F1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon512_maskable.png" />
      </head>
      <body>
        <main>{children}</main>
        <PWAInstallPrompt />
        <PWAServiceWorkerRegister />
      </body>
    </html>
  );
}
