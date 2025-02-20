"use client";

import { useCreditStore } from "@/store/useCreditsStore";
import Credits from "./Credits";
import { useAIResponseStore } from "@/store/useAIResponseStore";
import AskResultCard from "./Ask.ResultCard";
import AskForm from "./Ask.Form";
import SuggestionsWrapper from "./Suggestions.Wrapper";

function TryAskFormWrapper() {
  const { credits } = useCreditStore();
  const { response } = useAIResponseStore();

  return (
    <>
      <Credits />
      {response ? (
        <AskResultCard
          topic={response.topic}
          explanation={response.explanation}
        />
      ) : null}
      {credits !== 0 && (
        <>
          <AskForm />
          {!response ? <SuggestionsWrapper /> : null}
        </>
      )}
    </>
  );
}

export default TryAskFormWrapper;
