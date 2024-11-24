import TrialUserDataProvider from "@/Provider/TrialUserDataProvider";
import ResAskFormWrapper from "./Res.AskForm.Wrapper";
import TryFormAccordion from "./Try.FormAccordion";

const TryPlayground = () => {
  return (
    <div className="space-y-5">
      <TrialUserDataProvider>
        <TryFormAccordion />
        <ResAskFormWrapper />
      </TrialUserDataProvider>
    </div>
  );
};

export default TryPlayground;
