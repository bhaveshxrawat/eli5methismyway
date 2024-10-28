"use client";

import { Button } from "@/components/ui/button";
import { prmtGemini } from "@/lib/promptGemini";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { toast } from "sonner";
import type { AIRes } from "./interfaces";

export default function FormAsk({
  setAIRes,
}: {
  setAIRes: Dispatch<SetStateAction<AIRes | null>>;
}) {
  const taRef = useRef<HTMLTextAreaElement>(null);
  const [disableBtn, setDisableBtn] = useState(false);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const question = taRef.current!.value;
    if (question!.length > 3) {
      try {
        setDisableBtn(true);
        const answer: AIRes = await prmtGemini(question);
        setAIRes(answer);
        setDisableBtn(false);
        taRef.current!.value = "";
      } catch {
        toast.error("Something went wrong", { duration: 1300 });
        setDisableBtn(false);
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
          placeholder="Ask me anything..."
        ></textarea>
        <Button
          type="submit"
          className={`w-20 ${disableBtn ? "animate-pulse" : ""}`}
          disabled={disableBtn}
        >
          {disableBtn ? "Cooking..." : "Ask"}
        </Button>
      </div>
    </form>
  );
}
