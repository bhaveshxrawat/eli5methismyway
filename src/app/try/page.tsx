import type { Metadata } from "next";
import AppNavBar from "../components/AppNavBar";
import TryPlayground from "../components/Try.Playground";

export const metadata: Metadata = {
  title: "Try - ELI5 Me",
  description: "Try Your Personalised Learning Guide Now",
};

export default function TryPage() {
  return (
    <>
      <AppNavBar />
      <main className="px-4 pt-6 sm:pt-24 pb-4 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-transparent dark:to-80%">
        <section className="max-w-screen-xl mx-auto">
          <div className="space-y-10">
            <h3 className="text-center text-5xl font-semibold">Hello, Anon!</h3>
            <TryPlayground />
          </div>
        </section>
      </main>
    </>
  );
}
