"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const SignOutGoogle = () => {
  const { push } = useRouter();
  return (
    <Button
      className="ml-auto"
      variant={"ghost"}
      onClick={() => {
        signOut();
        toast.success("You've successfully been signed out. Redirecting...", {
          duration: 1500,
        });
        setTimeout(() => push("/"), 1500);
      }}
    >
      Sign Out
    </Button>
  );
};

export default SignOutGoogle;
