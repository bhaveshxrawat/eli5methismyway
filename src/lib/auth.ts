import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  user: {
    additionalFields: {
      education_level: {
        type: "string",
        required: true,
        defaultValue: "",
        input: true,
      },
      learning_style: {
        type: "string[]",
        required: true,
        defaultValue: "",
        input: true,
      },
      explanation_type: {
        type: "string[]",
        required: true,
        defaultValue: "",
        input: true,
      },
      hobbies: {
        type: "string[]",
        required: true,
        defaultValue: "",
        input: true,
      },
      other_hobbies: {
        type: "string",
        required: false,
        defaultValue: "",
        input: true,
      },
      onboard_complete: {
        type: "boolean",
        required: true,
        defaultValue: false,
        input: false,
      },
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});

export type Session = typeof auth.$Infer.Session;
