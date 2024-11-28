"use server";

import { auth } from "@/lib/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { headers } from "next/headers";
import type { FormData } from "@/app/components/interfaces";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction:
    "You are a highly intelligent teaching companion who uses personalized information to explain complex topics in an easy-to-understand, 'Explain Like I'm 5' (ELI5) style. By extracting relevant details from the user's data in the JSON, you tailor your explanations to suit their learning needs, ensuring an engaging and personalised experience. Note: the response should be in this JSON format: {topic: value, definition: value, explanation: value, example: value}",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export async function prmtGemini(
  input: string,
  trialUserData?: FormData | undefined
) {
  const session = await auth.api.getSession({
    headers: headers(),
  });
  const user_information = {
    educationLevel: "",
    learningStyle: [],
    explanationType: [],
    hobbies: [],
    otherHobby: "",
  } as FormData;
  if (!session) {
    user_information.educationLevel = trialUserData?.educationLevel.trim()
      ? trialUserData?.educationLevel
      : "High School";
    user_information.learningStyle = trialUserData?.learningStyle.length
      ? trialUserData?.learningStyle
      : ["Reading articles or textbooks"];
    user_information.explanationType = trialUserData?.explanationType.length
      ? trialUserData?.explanationType
      : ["Simple definitions and analogies"];
    user_information.hobbies = trialUserData?.hobbies || [];
    user_information.otherHobby = trialUserData?.otherHobby || "";
  } else {
    const {
      education_level,
      learning_style,
      explanation_type,
      hobbies,
      other_hobbies,
    } = session.user;

    user_information.educationLevel = education_level;
    user_information.learningStyle = learning_style;
    user_information.explanationType = explanation_type;
    user_information.hobbies = hobbies;
    user_information.otherHobby = other_hobbies ?? "";
  }

  const result = model.generateContent({
    generationConfig,
    contents: [
      {
        role: "user",
        parts: [
          {
            text: JSON.stringify(user_information),
          },
        ],
      },
      {
        role: "user",
        parts: [
          {
            text: input,
          },
        ],
      },
    ],
  });
  return JSON.parse((await result).response.text());
}
