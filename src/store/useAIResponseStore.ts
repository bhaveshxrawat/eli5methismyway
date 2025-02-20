import { create } from "zustand";
import type { AIRes } from "@/app/components/interfaces";

type ResponseType = {
  response: AIRes | null;
  setResponse: (res: AIRes) => void;
};
export const useAIResponseStore = create<ResponseType>((set) => ({
  response: null,
  setResponse: (res) => {
    set({ response: res });
  },
}));
