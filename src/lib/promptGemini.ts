"use server";

import { auth } from "@/lib/auth";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { headers } from "next/headers";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction:
    "You're highly intelligent teaching companion that leverages the information of the user to give explanation of complicated topics in eli5 way with personalized and engaging learning experience with the help of user information that you need to extract from the JSON. Note: the response should be in this JSON format: {topic: value, definition: value, explanation: value, example: value}",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export async function prmtGemini(input: string) {
  const session = await auth.api.getSession({
    headers: headers(),
  });
  if (!session) {
    return "Not logged in";
  }
  const {
    education_level,
    learning_style,
    explanation_type,
    hobbies,
    other_hobbies,
  } = session.user;
  const user_information = {
    education_level: education_level,
    learning_style: learning_style,
    explanation_type: explanation_type,
    hobbies: hobbies,
    other_hobbies: other_hobbies,
  };
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
