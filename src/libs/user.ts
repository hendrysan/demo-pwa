import { setCookie, parseCookies, destroyCookie } from "nookies";
import { IncomingMessage, ServerResponse } from "http";

const USER_KEY = "user";

export function saveUser(
  user: string,
  ctx?: { req?: IncomingMessage; res?: ServerResponse }
) {
  setCookie(ctx, USER_KEY, user, {
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
    secure: false, // Set to false for HTTP access, or use HTTPS
    sameSite: "lax", // Changed from "strict" to "lax" for better compatibility
  });
}

export function getUser(ctx?: { req?: IncomingMessage }) {
  const cookies = parseCookies(ctx);
  return cookies[USER_KEY];
}

export function clearUser(ctx?: {
  req?: IncomingMessage;
  res?: ServerResponse;
}) {
  destroyCookie(ctx, USER_KEY, { path: "/" });
}
