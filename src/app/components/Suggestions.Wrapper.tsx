"use client";

import SuggestionTile from "./Suggestions.Card";
import { suggestions } from "@/lib/utils/suggestions";
import "./Animations.css";
import { useEffect, useRef, useState } from "react";
import type { AIRes } from "@/app/components/interfaces";
import { prmtGemini } from "@/lib/promptGemini";
import { toast } from "sonner";
import { useCreditStore } from "@/store/useCreditsStore";
import { useAIResponseStore } from "@/store/useAIResponseStore";

function randomQues(length: number): string[] {
  const selectedQuestions: string[] = [];
  let i = 0;
  while (i < length) {
    const randomFieldIndex = Math.floor(Math.random() * 6);
    const randomQuestionIndex = Math.floor(Math.random() * 5);
    const currField = Object.keys(suggestions)[
      randomFieldIndex
    ] as keyof SuggestionType; //single field
    const currFieldQuestion: string =
      suggestions[currField][randomQuestionIndex];
    if (!selectedQuestions.includes(currFieldQuestion)) {
      selectedQuestions.push(currFieldQuestion);
      i++;
    }
  }
  return selectedQuestions;
}
const SuggestionsWrapper = () => {
  const [randomGenSuggestions, setRandomGenSuggestions] = useState<string[]>(
    []
  );
  const { decreaseCredits } = useCreditStore();
  const { setResponse } = useAIResponseStore();
  useEffect(() => {
    setRandomGenSuggestions(randomQues(3));
  }, []);
  const suggestRef = useRef<HTMLDivElement>(null);

  async function suggestHandler(question: string) {
    try {
      suggestRef.current!.classList.add("no-userInteraction");
      const answer: AIRes = await prmtGemini(question);
      setResponse(answer);
      decreaseCredits();
    } catch {
      toast.error("Something went wrong", { duration: 1300 });
    } finally {
      suggestRef.current!.classList.remove("no-userInteraction");
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
