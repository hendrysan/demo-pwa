import { setCookie, parseCookies, destroyCookie } from "nookies";
import { IncomingMessage, ServerResponse } from "http";

const TOKEN_KEY = "token";

export function saveToken(
  token: string,
  ctx?: { req?: IncomingMessage; res?: ServerResponse }
) {
  setCookie(ctx, TOKEN_KEY, token, {
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
    secure: false, // Set to false for HTTP access, or use HTTPS
    sameSite: "lax", // Changed from "strict" to "lax" for better compatibility
  });
}

export function getToken(ctx?: { req?: IncomingMessage }) {
  const cookies = parseCookies(ctx);
  return cookies[TOKEN_KEY];
}

export function clearToken(ctx?: {
  req?: IncomingMessage;
  res?: ServerResponse;
}) {
  destroyCookie(ctx, TOKEN_KEY, { path: "/" });
}
