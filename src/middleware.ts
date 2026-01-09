// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // ambil token dari cookie
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.clone();

  // Allow PWA core files
  const pwaFiles = ["/manifest.json", "/sw.js", "/workbox"];
  if (pwaFiles.some((file) => url.pathname.includes(file))) {
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/form/:path*"],
};
