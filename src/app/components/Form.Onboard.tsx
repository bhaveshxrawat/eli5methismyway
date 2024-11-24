"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import questions from "@/lib/utils/questionnaire.json";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import type { FormData } from "@/app/components/interfaces";
import { updateOnboardComplete } from "@/lib/query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function OnboardingQuestionnaire() {
  const initialFormData = {
    educationLevel: "",
    learningStyle: [],
    explanationType: [],
    hobbies: [],
    otherHobby: "",
  } as FormData;
  const { push } = useRouter();
  const [step, setStep] = useState(1);
  const [submitBtnStatus, setSubmitBtnStatus] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof FormData, value: string): void => {
    setFormData((prev) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    const timeOut = 1500;
    e.preventDefault();
    if (step < 2) {
      setStep((prev) => prev + 1);
    } else {
      console.log("Form submitted:", formData);
      try {
        setSubmitBtnStatus(true);
        const result = await updateOnboardComplete(formData);
        if (result) {
          toast.success("You're good to go! Redirecting...", {
            duration: timeOut,
          });
          setTimeout(() => {
            push("/ask");
          }, timeOut);
        }
      } catch (error) {
        setSubmitBtnStatus(false);
        toast.error("Welp! Couldn't submit. Try again.");
        throw error;
      }
    }
  };

  function isNextDisabled() {
    switch (step) {
      case 1:
        return (
          formData.educationLevel.trim() !== "" &&
          formData.learningStyle.length > 0 &&
          formData.explanationType.length > 0
        );
      case 2:
        return formData.hobbies.length > 0;
      default:
        return false;
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/[.07] backdrop-blur-sm border-white/[0.18]">
      <CardHeader>
        <CardTitle>
          Interest Questionnaire <small>(We&apos;ll keep it short.)</small>
        </CardTitle>
        <CardDescription>Step {step} of 2</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="educationLevel">
                  What is your current level of education?
                </Label>
                <Input
                  id="educationLevel"
                  name="educationLevel"
                  value={formData.educationLevel}
                  onChange={handleInputChange}
                  placeholder="e.g., High School, College"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>
                  How do you prefer to learn? (Select all that apply)
                </Label>
                {questions.learningStyle.map((item) => (
                  <div key={item} className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      id={`learning-${item}`}
                      checked={formData.learningStyle.includes(item)}
                      onCheckedChange={() =>
                        handleCheckboxChange("learningStyle", item)
                      }
                    />
                    <Label htmlFor={`learning-${item}`}>{item}</Label>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <Label>
                  What types of explanations do you find most helpful? (Select
                  all that apply)
                </Label>
                {questions.explanationType.map((item) => (
                  <div key={item} className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      id={`explanation-${item}`}
                      checked={formData.explanationType.includes(item)}
                      onCheckedChange={() =>
                        handleCheckboxChange("explanationType", item)
                      }
                    />
                    <Label htmlFor={`explanation-${item}`}>{item}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>
                  What hobbies or interests do you have outside of school?
                  (Select all that apply)
                </Label>
                {questions.hobbies.map((item) => (
                  <div key={item} className="flex items-center space-x-2 mt-2">
                    <Checkbox
                      id={`hobby-${item}`}
                      checked={formData.hobbies.includes(item)}
                      onCheckedChange={() =>
                        handleCheckboxChange("hobbies", item)
                      }
                    />
                    <Label htmlFor={`hobby-${item}`}>{item}</Label>
                  </div>
                ))}
                <div className="flex items-center space-x-2 mt-2">
                  <Checkbox
                    id="hobby-other"
                    checked={formData.hobbies.includes("Other")}
                    onCheckedChange={() =>
                      handleCheckboxChange("hobbies", "Other")
                    }
                  />
                  <Label htmlFor="hobby-other">Other</Label>
                </div>
                {formData.hobbies.includes("Other") && (
                  <Input
                    id="otherHobby"
                    name="otherHobby"
                    value={formData.otherHobby}
                    onChange={handleInputChange}
                    placeholder="Eg. Trains, Swimming, Cooking, etc"
                    className="mt-2"
                  />
                )}
              </div>
            </div>
          )}
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          {step > 1 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep((prev) => prev - 1)}
            >
              Previous
            </Button>
          )}
          <Button
            type="submit"
            onClick={handleSubmit}
            disabled={submitBtnStatus || !isNextDisabled()}
          >
            {step === 2
              ? `${submitBtnStatus ? "Submitting..." : "Submit"}`
              : "Next"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
