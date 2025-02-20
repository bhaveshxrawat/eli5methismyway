"use client";

import AskForm from "@/app/components/Ask.Form";
import AskResultCard from "./Ask.ResultCard";
import SuggestionsWrapper from "./Suggestions.Wrapper";
import { useAIResponseStore } from "@/store/useAIResponseStore";

const ResAskFormWrapper = () => {
  const { response } = useAIResponseStore();
  return (
    <div className="space-y-5">
      {response ? (
        <AskResultCard
          topic={response.topic}
          explanation={response.explanation}
        />
      ) : null}
      <AskForm />
      {!response ? <SuggestionsWrapper /> : null}
    </div>
  );
};

export default ResAskFormWrapper;
