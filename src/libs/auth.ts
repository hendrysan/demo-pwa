import { setCookie, parseCookies, destroyCookie } from "nookies";
import { IncomingMessage, ServerResponse } from "http";

const TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refresh_token";

export function saveToken(
  token: string,
  ctx?: { req?: IncomingMessage; res?: ServerResponse }
) {
  setCookie(ctx, TOKEN_KEY, token, {
    maxAge: 60 * 60 * 24, // 1 day
    path: "/",
    secure: process.env.NODE_ENV === "production", // secure in production
    sameSite: "lax",
  });
}

export function saveRefreshToken(
  token: string,
  ctx?: { req?: IncomingMessage; res?: ServerResponse }
) {
  setCookie(ctx, REFRESH_TOKEN_KEY, token, {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
}

export function getToken(ctx?: { req?: IncomingMessage }) {
  const cookies = parseCookies(ctx);
  return cookies[TOKEN_KEY];
}

export function getRefreshToken(ctx?: { req?: IncomingMessage }) {
  const cookies = parseCookies(ctx);
  return cookies[REFRESH_TOKEN_KEY];
}

export function clearToken(ctx?: {
  req?: IncomingMessage;
  res?: ServerResponse;
}) {
  destroyCookie(ctx, TOKEN_KEY, { path: "/" });
  destroyCookie(ctx, REFRESH_TOKEN_KEY, { path: "/" });
}
