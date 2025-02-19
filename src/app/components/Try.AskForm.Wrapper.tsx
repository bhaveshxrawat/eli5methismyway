"use client";

import { useCreditStore } from "@/store/useCreditsStore";
import Credits from "./Credits";
import ResAskFormWrapper from "./Res.AskForm.Wrapper";

function TryAskFormWrapper() {
  const { credits } = useCreditStore();
  return (
    <>
      <Credits />
      {credits !== 0 && <ResAskFormWrapper />}
    </>
  );
}

export default TryAskFormWrapper;
