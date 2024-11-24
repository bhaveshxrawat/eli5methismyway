"use client";
import { useSession } from "@/lib/auth-client";

export default function GreetingHeader() {
  const { data: session } = useSession();
  return (
    <header className="text-center text-5xl font-semibold">
      Learn your way{session ? ", " + session.user.name.split(" ")[0] : ""}!
    </header>
  );
}
