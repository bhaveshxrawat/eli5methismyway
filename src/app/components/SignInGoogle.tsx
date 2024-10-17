import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/auth-client";

const SignInWithGoogle = () => {
  return (
    <Button
      onClick={async () => {
        await signIn.social({
          provider: "google",
          callbackURL: "/ask",
        });
      }}
    >
      Continue with Google
    </Button>
  );
};

export default SignInWithGoogle;
