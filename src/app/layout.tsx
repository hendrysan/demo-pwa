import "@/styles/globals.css";

// Server Component (default)
export const metadata = {
  title: "Library App",
  description: "Library app development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
