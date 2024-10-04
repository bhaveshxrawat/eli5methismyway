import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAuthenticated } from "./lib/utils/isAuthenticated";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const hasOnboarded = true;
    const isUserAuthenticated = await isAuthenticated();
    if (isUserAuthenticated && hasOnboarded) {
        return NextResponse.redirect(new URL("/ask", request.url));
    }
    if (isUserAuthenticated && !hasOnboarded) {
        return NextResponse.redirect(
            new URL("/onboarding-questionnaire", request.url)
        );
    }
    if (!isUserAuthenticated) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/sign-in", "/ask/:path", "/onboarding-questionnaire/:path"],
};
