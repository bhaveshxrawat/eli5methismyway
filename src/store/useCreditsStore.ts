import { create } from "zustand";
import { persistNSync } from "persist-and-sync";
type CreditStoreType = {
  credits: number;
  decreaseCredits: () => void;
};
export const useCreditStore = create<CreditStoreType>()(
  persistNSync(
    (set) => ({
      credits: 1,
      decreaseCredits: () => {
        set((prev) => ({ credits: prev.credits - 1 }));
      },
    }),
    { name: "anonUserCredits" }
  )
);
