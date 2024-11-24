"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import questions from "@/lib/utils/questionnaire.json";
import { Checkbox } from "@/components/ui/checkbox";
import { useTrialUserData } from "@/Provider/TrialUserDataProvider";
import Link from "next/link";

const TryFormAccordion = () => {
  const { trialUserFormData, handleInputChange, handleCheckboxChange } =
    useTrialUserData();
  return (
    <Accordion type="single" collapsible>
      <AccordionItem
        value="item-1"
        className="border-b-0 rounded-lg overflow-clip bg-black/30"
      >
        <AccordionTrigger className="p-6 text-xl font-normal group">
          <p>
            Interest Questionnaire
            <small className="opacity-0 text-sm ml-2 mr-auto group-[[data-state='open']]:opacity-100 transition-opacity">
              (<Link href="/sign-in">Sign in to save the preference.</Link>)
            </small>
          </p>
        </AccordionTrigger>
        <AccordionContent className="p-6 border-t-1 border-white/20">
          <form>
            <div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="educationLevel">
                    What is your current level of education?
                  </Label>
                  <Input
                    id="educationLevel"
                    name="educationLevel"
                    value={trialUserFormData.educationLevel}
                    className="border-white/20 border-2 outline-none"
                    onChange={handleInputChange}
                    placeholder="e.g., High School, College"
                    required
                  />
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
                  <div className="space-y-2">
                    <Label>
                      How do you prefer to learn? (Select all that apply)
                    </Label>
                    {questions.learningStyle.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 mt-2"
                      >
                        <Checkbox
                          id={`learning-${item}`}
                          checked={trialUserFormData.learningStyle.includes(
                            item
                          )}
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
                      What types of explanations do you find most helpful?
                      (Select all that apply)
                    </Label>
                    {questions.explanationType.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 mt-2"
                      >
                        <Checkbox
                          id={`explanation-${item}`}
                          checked={trialUserFormData.explanationType.includes(
                            item
                          )}
                          onCheckedChange={() =>
                            handleCheckboxChange("explanationType", item)
                          }
                        />
                        <Label htmlFor={`explanation-${item}`}>{item}</Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label>
                      What hobbies or interests do you have outside of school?
                      (Select all that apply)
                    </Label>
                    {questions.hobbies.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 mt-2"
                      >
                        <Checkbox
                          id={`hobby-${item}`}
                          checked={trialUserFormData.hobbies.includes(item)}
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
                        checked={trialUserFormData.hobbies.includes("Other")}
                        onCheckedChange={() =>
                          handleCheckboxChange("hobbies", "Other")
                        }
                      />
                      <Label htmlFor="hobby-other">Other</Label>
                    </div>
                    {trialUserFormData.hobbies.includes("Other") && (
                      <Input
                        id="otherHobby"
                        name="otherHobby"
                        value={trialUserFormData.otherHobby}
                        onChange={handleInputChange}
                        placeholder="Eg. Trains, Swimming, Cooking, etc"
                        className="mt-2"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TryFormAccordion;
