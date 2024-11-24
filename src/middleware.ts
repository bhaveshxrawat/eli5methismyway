// import type { Session } from "better-auth/types";
import { betterFetch } from "@better-fetch/fetch";
import type { Session } from "@/lib/auth";
import { NextResponse, type NextRequest } from "next/server";

export default async function authMiddleware(request: NextRequest) {
  const { data: session, data: user } = await betterFetch<Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        //get the cookie from the request
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  const onboard_complete = user?.user.onboard_complete;
  const baseURL = request.nextUrl.origin;
  const isDev = process.env.NODE_ENV === "development";
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  if (isDev) {
    return response;
  }
  if (
    session &&
    onboard_complete &&
    (request.nextUrl.pathname === "/sign-in" ||
      request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/onboard" ||
      request.nextUrl.pathname === "/try")
  ) {
    return NextResponse.redirect(new URL("/ask", baseURL));
  }
  if (
    session &&
    !onboard_complete &&
    (request.nextUrl.pathname === "/ask" ||
      request.nextUrl.pathname === "/" ||
      request.nextUrl.pathname === "/try" ||
      request.nextUrl.pathname === "/sign-in")
  ) {
    return NextResponse.redirect(new URL("/onboard", baseURL));
  }
  if (
    !session &&
    (request.nextUrl.pathname === "/ask" ||
      request.nextUrl.pathname === "/onboard")
  ) {
    console.log(process.env.NODE_ENV, process.env.DEV_MODE);
    return NextResponse.redirect(new URL("/sign-in", baseURL));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/ask", "/sign-in", "/onboard", "/try"],
};
