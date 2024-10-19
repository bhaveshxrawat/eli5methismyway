import type { Metadata } from "next";
import OnboardingQuestionnaire from "../components/Form.Onboard";

export const metadata: Metadata = {
  title: "Onboard",
  description: "Your Personalised Learning Guide",
};

export default function Onboard() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <OnboardingQuestionnaire />
    </main>
  );
}
