"use client";

import { useCreditStore } from "@/store/useCreditsStore";
import Link from "next/link";

function Credits() {
  const { credits } = useCreditStore();
  return (
    <p>
      You have {credits} credit(s) left.{" "}
      <Link className="underline" href={"/sign-in"}>
        Sign in
      </Link>{" "}
      to reset the limit.
    </p>
  );
}

export default Credits;
