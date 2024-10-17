import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  user: {
    additionalFields: {
      education_level: {
        type: "string",
        required: false,
        defaultValue: undefined,
        input: true,
      },
      learning_style: {
        type: "string[]",
        required: false,
        defaultValue: undefined,
        input: true,
      },
      explanation_type: {
        type: "string[]",
        required: false,
        defaultValue: undefined,
        input: true,
      },
      hobbies: {
        type: "string[]",
        required: false,
        defaultValue: undefined,
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
