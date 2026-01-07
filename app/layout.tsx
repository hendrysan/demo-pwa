import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/service-worker-registation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "PWA APP",
  title: {
    default: "PWA APP DEMO",
    template: "DEMO",
  },
  description: "PWA APP DESCRIPTION",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PWA APP DEMO",
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "PWA APP",
    title: {
      default: "PWA APP DEMO",
      template: "DEMO",
    },
    description: "PWA APP DESCRIPTION",
  },
  twitter: {
    card: "summary",
    title: {
      default: "PWA APP DEMO",
      template: "DEMO",
    },
    description: "PWA APP DESCRIPTION",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ServiceWorkerRegistration />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
