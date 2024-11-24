"use client";

import AskForm from "@/app/components/Ask.Form";
import AskResultCard from "./Ask.ResultCard";
import { useState } from "react";
import type { AIRes } from "./interfaces";
import SuggestionsWrapper from "./Suggestions.Wrapper";

const ResAskFormWrapper = () => {
  const [aiRes, setAIRes] = useState<AIRes | null>(null);
  return (
    <div className="space-y-5">
      {aiRes ? (
        <AskResultCard
          definition={aiRes.definition}
          topic={aiRes.topic}
          example={aiRes.example}
          explanation={aiRes.explanation}
        />
      ) : null}
      <AskForm setAIRes={setAIRes} />
      {!aiRes ? <SuggestionsWrapper setAIRes={setAIRes} /> : null}
    </div>
  );
};

export default ResAskFormWrapper;
