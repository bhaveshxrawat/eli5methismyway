"use server";

import { signIn } from "@/lib/auth";

export const handleGoogleOAuthSignIn = async () => {
    await signIn("google", { redirectTo: "/onboarding-questionnaire" });
};
