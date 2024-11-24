"use client";
import { createContext, useContext, useState } from "react";
import type { FormData } from "@/app/components/interfaces";

interface TrialUserDataType {
  trialUserFormData: FormData;
  setTrialUserFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (name: keyof FormData, value: string) => void;
  initialFormData: FormData;
}

const TrialUserDataContext = createContext<TrialUserDataType>(
  {} as TrialUserDataType
);

const TrialUserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const initialFormData = {
    educationLevel: "",
    learningStyle: [],
    explanationType: [],
    hobbies: [],
    otherHobby: "",
  } as FormData;
  const [trialUserFormData, setTrialUserFormData] = useState(initialFormData);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTrialUserFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheckboxChange = (name: keyof FormData, value: string): void => {
    setTrialUserFormData((prev) => {
      if (prev[name] instanceof Array) {
        if (prev[name].includes(value)) {
          return {
            ...prev,
            [name]: prev[name].filter((item) => item !== value),
          };
        } else {
          return {
            ...prev,
            [name]: [...prev[name], value],
          };
        }
      } else {
        return {
          ...prev,
          [name]: [value],
        };
      }
    });
  };
  return (
    <TrialUserDataContext.Provider
      value={{
        trialUserFormData,
        setTrialUserFormData,
        handleInputChange,
        handleCheckboxChange,
        initialFormData,
      }}
    >
      {children}
    </TrialUserDataContext.Provider>
  );
};

export const useTrialUserData = () => {
  const context = useContext(TrialUserDataContext);
  if (!context) {
    throw new Error(
      "useTrialUserData must be used within a TrialUserDataProvider"
    );
  }
  return context;
};

export default TrialUserDataProvider;
