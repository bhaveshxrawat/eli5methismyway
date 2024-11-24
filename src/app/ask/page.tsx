import type { Metadata } from "next";
import AskNavbar from "../components/Ask.Navbar";
import ResAskFormWrapper from "../components/Res.AskForm.Wrapper";
import GreetingHeader from "../components/GreetingHeader";

export const metadata: Metadata = {
  title: "Ask - ELI5 Me",
  description: "Your Personalised Learning Guide",
};

export default function Ask() {
  return (
    <>
      <AskNavbar />
      <main className="px-4 pt-6 sm:pt-24 pb-4 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-transparent dark:to-80%">
        <section className="max-w-screen-xl mx-auto">
          <div className="space-y-10">
            <GreetingHeader />
            <ResAskFormWrapper />
          </div>
        </section>
      </main>
    </>
  );
}
