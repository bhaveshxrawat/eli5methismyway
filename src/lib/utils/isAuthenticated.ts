"use server";

import { auth } from "@/lib/auth";

export const isAuthenticated = async () => {
    const session = await auth();
    if (session) {
        return true;
    } else {
        return false;
    }
};
