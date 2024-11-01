import type { Metadata } from "next";
import AskNavbar from "../components/Ask.Navbar";
import Wrapper from "../components/Res.Form.Wrapper";

export const metadata: Metadata = {
  title: "Ask - ELI5 Me",
  description: "Your Personalised Learning Guide",
};

const Ask = () => {
  return (
    <>
      <AskNavbar />
      <main className="px-4 pt-6 sm:pt-24 pb-4 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-transparent dark:to-80%">
        <section className="max-w-screen-xl mx-auto">
          <div className="space-y-10">
            <h3 className="text-center text-5xl font-semibold">
              Learn your way!
            </h3>
            <Wrapper />
          </div>
        </section>
      </main>
    </>
  );
};

export default Ask;
