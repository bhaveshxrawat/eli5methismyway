import { getItem, setItem } from "@/lib/utils/localStore";
import { create } from "zustand";

type CreditStoreType = {
  credits: number;
  decreaseCredits: () => void;
};
export const useCreditStore = create<CreditStoreType>((set) => ({
  credits: getItem("anonUserCredits", 20),
  decreaseCredits: () => {
    set((prev) => {
      if (prev.credits === 0) return { credits: 0 };
      const newCredits = prev.credits - 1;
      setItem("anonUserCredits", newCredits);
      return { credits: newCredits };
    });
  },
}));
