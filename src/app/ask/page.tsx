import { isAuthenticated } from "@/lib/utils/isAuthenticated";
import { redirect } from "next/navigation";
import Ask from "./Ask";

const page = async () => {
    const isUserAuthenticated = await isAuthenticated();
    const hasOnboarded = false;
    if (!isUserAuthenticated) {
        redirect("/sign-in");
    } else if (isUserAuthenticated && !hasOnboarded) {
        redirect("/onboarding-questionnaire");
    }
    return <Ask />;
};

export default page;
