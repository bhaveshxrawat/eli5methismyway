import TrialUserDataProvider from "@/Provider/TrialUserDataProvider";
import TryFormAccordion from "./Try.FormAccordion";
import TryAskFormWrapper from "./Try.AskForm.Wrapper";

const TryPlayground = () => {
  return (
    <div className="space-y-5">
      <TrialUserDataProvider>
        <TryFormAccordion />
        <TryAskFormWrapper />
      </TrialUserDataProvider>
    </div>
  );
};

export default TryPlayground;
