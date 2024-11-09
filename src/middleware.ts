import { authMiddleware } from "better-auth/next-js";
import { NextResponse } from "next/server";

export default authMiddleware({
  customRedirect: async (session, request) => {
    // @ts-expect-error wrong type
    const onboard_complete = session?.user?.onboard_complete;
    const baseURL = request.nextUrl.origin;
    const isDev = process.env.NODE_ENV === "development"
    const response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
    if(isDev) {
      return response;
    }
    if (
      session &&
      onboard_complete &&
      (request.nextUrl.pathname === "/sign-in" ||
        request.nextUrl.pathname === "/" ||
        request.nextUrl.pathname === "/onboard")
    ) {
      return NextResponse.redirect(new URL("/ask", baseURL));
    }
    if (
      session &&
      !onboard_complete &&
      (request.nextUrl.pathname === "/ask" || request.nextUrl.pathname === "/")
    ) {
      return NextResponse.redirect(new URL("/onboard", baseURL));
    }
    if (
      !session &&
      (request.nextUrl.pathname === "/ask" ||
        request.nextUrl.pathname === "/onboard")
    ) {
      console.log(process.env.NODE_ENV, process.env.DEV_MODE)
      return NextResponse.redirect(new URL("/sign-in", baseURL));
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/", "/ask", "/sign-in", "/onboard"],
};
