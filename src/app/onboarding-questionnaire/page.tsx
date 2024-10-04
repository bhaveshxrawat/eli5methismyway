import { isAuthenticated } from "@/lib/utils/isAuthenticated";
import { redirect } from "next/navigation";
import OnboardingQuestionnaire from "./OnboardingQuestionnaire";

const page = async () => {
    const isUserAuthenticated = await isAuthenticated();
    if (isUserAuthenticated) {
        redirect("/ask");
    }
    return <OnboardingQuestionnaire />;
};

export default page;
