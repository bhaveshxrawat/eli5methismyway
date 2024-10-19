"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { FormData } from "@/app/components/interfaces";
import prisma from "./db";

export async function updateOnboardComplete(formData: FormData) {
  const {
    educationLevel,
    learningStyle,
    explanationType,
    hobbies,
    otherHobby,
  } = formData;
  const session = await auth.api.getSession({
    headers: headers(),
  });
  if (!session) {
    throw new Response("Session not found", { status: 401 });
  }
  const result = await prisma.user.update({
    where: {
      id: session?.user?.id,
    },
    data: {
      education_level: educationLevel,
      learning_style: learningStyle,
      explanation_type: explanationType,
      hobbies: hobbies,
      other_hobbies: otherHobby,
      onboard_complete: true,
    },
  });
  return result;
}
