"use client";

import { Button } from "@/components/ui/button";
import { prmtGemini } from "@/lib/promptGemini";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { toast } from "sonner";
import type { AIRes } from "./interfaces";
import { useTrialUserData } from "@/Provider/TrialUserDataProvider";
import { useSession } from "@/lib/auth-client";
import { useCreditStore } from "@/store/useCreditsStore";

export default function AskForm({
  setAIRes,
}: {
  setAIRes: Dispatch<SetStateAction<AIRes | null>>;
}) {
  const { trialUserFormData, setTrialUserFormData, initialFormData } =
    useTrialUserData();
  const { decreaseCredits } = useCreditStore();
  const taRef = useRef<HTMLTextAreaElement>(null);
  const [disableBtn, setDisableBtn] = useState(false);
  const { data: session } = useSession();
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const question = taRef.current!.value;
    if (question!.length > 3) {
      try {
        setDisableBtn(true);
        let answer: AIRes;
        if (session) {
          answer = await prmtGemini(question);
          setAIRes(answer);
        } else if (!session) {
          answer = await prmtGemini(question, trialUserFormData);
          setAIRes(answer);
          decreaseCredits();
        }
      } catch (e) {
        console.log(e);
        toast.error("Something went wrong", { duration: 1300 });
        setDisableBtn(false);
      } finally {
        setDisableBtn(false);
        taRef.current!.value = "";
        if (!session) {
          setTrialUserFormData(initialFormData);
        }
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="p-5 rounded-lg bg-black/30 text-white border-white/20 border-2 outline-none flex flex-col gap-3">
        <textarea
          ref={taRef}
          name="userQuestion"
          cols={30}
          className="resize-none w-full outline-none bg-transparent min-h-24"
          placeholder="What would you like to understand today?"
        ></textarea>
        <Button
          type="submit"
          className={`self-start ${disableBtn ? "animate-pulse" : ""}`}
          disabled={disableBtn}
        >
          {disableBtn ? "Generating..." : "Ask"}
        </Button>
      </div>
    </form>
  );
}
