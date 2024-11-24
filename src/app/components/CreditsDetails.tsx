"use client";
import { useCredits } from "@/Provider/CreditsProvider";

const CreditDetails = () => {
  const { credits } = useCredits();
  return (
    <p className="text-lg">
      <strong>Credits</strong>:{" "}
      <span className="text-normal">
        {credits.creditsLeft} / {credits.totalCredits}
      </span>
    </p>
  );
};

export default CreditDetails;
