// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // ambil token dari cookie
  const token = req.cookies.get("token")?.value;

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
