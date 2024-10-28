import SignInWithGoogle from "@/app/components/SignInGoogle";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <header className="fixed w-full p-4">
        <Link href="/">
          <Image src="/logo.svg" width="74" height="74" alt="logo" />
        </Link>
      </header>
      <main className="min-h-[100lvh] grid place-content-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[rgb(30,_58,_138)] to-[rgb(2,8,23)]">
        <div className="text-center space-y-4 max-w-72">
          <h2 className="font-semibold text-3xl">Oh, hey there!</h2>
          <h3 className="text-xl">
            Let&apos;s get you to your personal teaching assistant.
          </h3>
          <SignInWithGoogle />
        </div>
      </main>
    </>
  );
};

export default page;
