// import { isAuthenticated } from "@/lib/utils/isAuthenticated"
import { isAuthenticated } from "@/lib/utils/isAuthenticated";
import SignIn from "./SignIn";
import { redirect } from "next/navigation";

const page = async () => {
    const isUserAuthenticated = await isAuthenticated();
    if (isUserAuthenticated) {
        redirect("/ask");
    }
    return <SignIn />;
};

export default page;
