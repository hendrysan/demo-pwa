// src/lib/requireAuth.ts
import { GetServerSidePropsContext } from "next";
import { getToken } from "@/libs/auth";

export function requireAuth(context: GetServerSidePropsContext) {
  const token = getToken(context);

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return { props: {} };
}
