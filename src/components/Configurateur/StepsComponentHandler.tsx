import React from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";

interface StepsComponentHandlerProps {
  currentStepId: number;
  stepTitle: string;
  enableNextButton: (isEnabled: boolean) => void;
}

const StepsComponentHandler: React.FC<StepsComponentHandlerProps> = ({
  currentStepId,
  stepTitle,
  enableNextButton,
}) => {
  const renderCurrentStep = () => {
    switch (currentStepId) {
      case 1:
        return <Step1 enableNextButton={enableNextButton} />;
      case 2:
        return <Step2 enableNextButton={enableNextButton} />;
      case 3:
        return <Step3 enableNextButton={enableNextButton} />;
      case 4:
        return <Step4 enableNextButton={enableNextButton} />;
      case 5:
        return <Step5 enableNextButton={enableNextButton} />;
      case 6:
        return <Step6 enableNextButton={enableNextButton} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col bg-primary p-[10px] max-md:min-h-[10px] rounded-t-[16px] gap-2">
      <h1 className="font-bold text-center uppercase text-xl max-xl:text-xs max-lg:text-sm text-cText">
        {stepTitle}
      </h1>
      {renderCurrentStep()}
    </div>
  );
};

export default StepsComponentHandler;
