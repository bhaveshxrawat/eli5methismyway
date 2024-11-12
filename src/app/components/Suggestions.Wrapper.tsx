"use client";

import SuggestionTile from "./Suggestions.Card";
import questions from "@/lib/utils/suggestions.json";
import "./Animations.css";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import type { AIRes } from "@/app/components/interfaces";
import { prmtGemini } from "@/lib/promptGemini";
import { toast } from "sonner";

const randomQues = (length: number): string[] => {
  const selectedQuestions: string[] = [];
  let i = 0;
  while (i < length) {
    const randomFieldIndex = Math.floor(Math.random() * 6);
    const randomQuestionIndex = Math.floor(Math.random() * 5);
    const currField: string = Object.keys(questions)[randomFieldIndex]; //single field
    // @ts-expect-error dynamic key
    const currFieldQuestion: string = questions[currField][randomQuestionIndex];
    if (!selectedQuestions.includes(currFieldQuestion)) {
      selectedQuestions.push(currFieldQuestion);
      i++;
    }
  }
  return selectedQuestions;
};
const SuggestionsWrapper = ({
  setAIRes,
}: {
  setAIRes: Dispatch<SetStateAction<AIRes | null>>;
}) => {
  const [randomGenSuggestions, setRandomGenSuggestions] = useState<string[]>(
    []
  );
  useEffect(() => {
    setRandomGenSuggestions(randomQues(3));
  }, []);
  const suggestRef = useRef<HTMLDivElement>(null);
  async function suggestHandler(question: string) {
    try {
      suggestRef.current!.classList.add("no-userInteraction");
      const answer: AIRes = await prmtGemini(question);
      setAIRes(answer);
    } catch {
      suggestRef.current!.classList.remove("no-userInteraction");
      toast.error("Something went wrong", { duration: 1300 });
    }
  }

  return (
    <div ref={suggestRef}>
      <h4>Try these:</h4>
      <ul className="flex gap-2 flex-wrap mt-2">
        {randomGenSuggestions?.map((ques, i) => (
          <li className="flex-[1_1_350px]" key={i}>
            <SuggestionTile ques={ques} onClick={() => suggestHandler(ques)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsWrapper;
