interface Credits {
  creditsLeft: number;
  totalCredits: number;
}

interface FormData {
  educationLevel: string;
  learningStyle: string[];
  explanationType: string[];
  hobbies: string[];
  otherHobby: string;
}

interface AIRes {
  topic: string;
  definition: string;
  explanation: string;
  example: string;
}

export type { Credits, FormData, AIRes };
