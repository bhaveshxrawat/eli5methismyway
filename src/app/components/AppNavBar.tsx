"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";

export default function AppNavBar() {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  function handleTheme() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b dark:border-gray-800">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold text-lg text-gray-900 dark:text-white">
          ELI5Me
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        if(session)
        <Button variant="ghost" onClick={() => router.push("/sign-in")}>
          Sign In
        </Button>
        <Button variant="ghost" onClick={() => router.push("/ask")}>
          Ask
        </Button>
        <Button variant="ghost" size="icon" onClick={handleTheme}>
          <Sun className="h-[1.2rem] w-[1.2rem] hidden dark:block" />
          <Moon className="h-[1.2rem] w-[1.2rem] dark:hidden" />
        </Button>
      </nav>
    </header>
  );
}
