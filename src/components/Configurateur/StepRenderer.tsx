import React from "react";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";

interface StepRendererProps {
  currentStepId: number;
  enableNextButton: (isEnabled: boolean, selections?: any) => void;
}

const StepRenderer: React.FC<StepRendererProps> = ({ currentStepId, enableNextButton }) => {
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

export default StepRenderer;
