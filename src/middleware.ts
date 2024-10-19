import { authMiddleware } from "better-auth/next-js";
import { NextResponse } from "next/server";

export default authMiddleware({
  customRedirect: async (session, request) => {
    // @ts-expect-error wrong type
    const onboard_complete = session?.user?.onboard_complete;
    const baseURL = request.nextUrl.origin;
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
      return NextResponse.redirect(new URL("/sign-in", baseURL));
    }
    return NextResponse.next();
  },
});

export const config = {
  matcher: ["/", "/ask", "/sign-in", "/onboard"],
};
