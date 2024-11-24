"use client";
import { createContext, useContext, useState } from "react";
import type { Credits } from "@/app/components/interfaces";

interface CreditsContextType {
  credits: Credits;
  setCredits: React.Dispatch<React.SetStateAction<Credits>>;
}

const CreditsContext = createContext<CreditsContextType>(
  {} as CreditsContextType
);

const CreditsProvider = ({ children }: { children: React.ReactNode }) => {
  const [credits, setCredits] = useState({
    creditsLeft: 20,
    totalCredits: 20,
  });
  return (
    <CreditsContext.Provider value={{ credits, setCredits }}>
      {children}
    </CreditsContext.Provider>
  );
};

export const useCredits = () => {
  const context = useContext(CreditsContext);
  if (!context) {
    throw new Error("useCredits must be used within a CreditsProvider");
  }
  return context;
};

export default CreditsProvider;
