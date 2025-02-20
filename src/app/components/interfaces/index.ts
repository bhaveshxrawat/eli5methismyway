interface FormData {
  educationLevel: string;
  learningStyle: string[];
  explanationType: string[];
  hobbies: string[];
  otherHobby: string;
}

interface AIRes {
  topic: string;
  explanation: string;
}

export type { FormData, AIRes };
