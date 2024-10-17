"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";

type FormData = {
    displayName: string;
    email: string;
    educationLevel: string;
    learningStyle: string[];
    explanationType: string[];
    hobbies: string[];
    otherHobby: string;
};

export default function OnboardingQuestionnaire() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        displayName: "",
        email: "",
        educationLevel: "",
        learningStyle: [],
        explanationType: [],
        hobbies: [],
        otherHobby: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (
        name: keyof FormData,
        value: string
    ): void => {
        setFormData((prev) => ({
            ...prev,
            [name]:
                prev[name] instanceof Array
                    ? prev[name].includes(value)
                        ? prev[name].filter((item) => item !== value)
                        : [...prev[name], value]
                    : [value],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step < 3) {
            setStep((prev) => prev + 1);
        } else {
            console.log("Form submitted:", formData);
            // Here you would typically send the data to your backend
        }
    };

    const isStepValid = () => {
        switch (step) {
            case 1:
                return (
                    formData.displayName &&
                    formData.email &&
                    formData.educationLevel
                );
            case 2:
                return (
                    formData.learningStyle.length > 0 &&
                    formData.explanationType.length > 0
                );
            case 3:
                return formData.hobbies.length > 0;
            default:
                return false;
        }
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Interest Questionnaire</CardTitle>
                <CardDescription>Step {step} of 3</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="displayName">
                                    What is your display name?
                                </Label>
                                <Input
                                    id="displayName"
                                    name="displayName"
                                    value={formData.displayName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">
                                    What is your email address?
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div>
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
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-4">
                            <div>
                                <Label>
                                    How do you prefer to learn? (Select all that
                                    apply)
                                </Label>
                                {[
                                    "Reading articles or textbooks",
                                    "Watching videos",
                                    "Interactive games or quizzes",
                                    "Listening to podcasts or lectures",
                                    "Group discussions or study groups",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center space-x-2 mt-2"
                                    >
                                        <Checkbox
                                            id={`learning-${item}`}
                                            checked={formData.learningStyle.includes(
                                                item
                                            )}
                                            onCheckedChange={() =>
                                                handleCheckboxChange(
                                                    "learningStyle",
                                                    item
                                                )
                                            }
                                        />
                                        <Label htmlFor={`learning-${item}`}>
                                            {item}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Label>
                                    What types of explanations do you find most
                                    helpful? (Select all that apply)
                                </Label>
                                {[
                                    "Simple definitions",
                                    "Analogies and examples",
                                    "Visual aids (diagrams, charts)",
                                    "Step-by-step processes",
                                    "Real-world applications",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center space-x-2 mt-2"
                                    >
                                        <Checkbox
                                            id={`explanation-${item}`}
                                            checked={formData.explanationType.includes(
                                                item
                                            )}
                                            onCheckedChange={() =>
                                                handleCheckboxChange(
                                                    "explanationType",
                                                    item
                                                )
                                            }
                                        />
                                        <Label htmlFor={`explanation-${item}`}>
                                            {item}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-4">
                            <div>
                                <Label>
                                    What hobbies or interests do you have
                                    outside of school? (Select all that apply)
                                </Label>
                                {[
                                    "Sports",
                                    "Music",
                                    "Gaming",
                                    "Reading",
                                    "Traveling",
                                    "Technology",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center space-x-2 mt-2"
                                    >
                                        <Checkbox
                                            id={`hobby-${item}`}
                                            checked={formData.hobbies.includes(
                                                item
                                            )}
                                            onCheckedChange={() =>
                                                handleCheckboxChange(
                                                    "hobbies",
                                                    item
                                                )
                                            }
                                        />
                                        <Label htmlFor={`hobby-${item}`}>
                                            {item}
                                        </Label>
                                    </div>
                                ))}
                                <div className="flex items-center space-x-2 mt-2">
                                    <Checkbox
                                        id="hobby-other"
                                        checked={formData.hobbies.includes(
                                            "Other"
                                        )}
                                        onCheckedChange={() =>
                                            handleCheckboxChange(
                                                "hobbies",
                                                "Other"
                                            )
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
                                        placeholder="Please specify"
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
                        disabled={!isStepValid()}
                    >
                        {step === 3 ? "Submit" : "Next"}
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
