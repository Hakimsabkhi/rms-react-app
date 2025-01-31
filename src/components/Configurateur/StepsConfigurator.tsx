import React, { useEffect, useMemo } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { StepsData } from "../../assets/data"; // <-- import the array from data.ts

interface StepsConfiguratorProps {
  currentStepId: number;
  setCurrentStepId: (stepId: number) => void;
  enabledSteps: { [key: number]: boolean };
  onStepTitleChange: (title: string) => void;
}

const StepsConfigurator: React.FC<StepsConfiguratorProps> = ({
  currentStepId,
  setCurrentStepId,
  enabledSteps,
  onStepTitleChange,
}) => {
  // useMemo to memoize the array of steps
  const Steps = useMemo(() => StepsData, []);

  const totalSteps = Steps.length;
  const previousStep = currentStepId - 1;
  const nextStep = currentStepId + 1;

  useEffect(() => {
    const currentStep = Steps.find((step) => step.id === currentStepId);
    if (currentStep) {
      onStepTitleChange(currentStep.title);
    }
  }, [currentStepId, onStepTitleChange, Steps]);

  return (
    <div className="flex flex-col justify-center rounded-[16px] bg-primary p-[10px] gap-2 py-2 mb-2 max-lg:hidden">
      <h1 className="font-bold text-center text-lg uppercase max-xl:text-xs max-lg:text-[10px] text-cText">
        Volet roulant rénovation sur mesure
      </h1>
      <div className="flex justify-center items-center gap-[5px]">
        <AiOutlineLeft
          className={`cursor-pointer ${
            previousStep < 1 || !enabledSteps[previousStep]
              ? "text-secondary cursor-not-allowed"
              : "text-secondary"
          }`}
          onClick={() =>
            previousStep >= 1 && enabledSteps[previousStep] && setCurrentStepId(previousStep)
          }
          size={24}
        />

        {Steps.filter(({ id }) => {
          if (currentStepId === 1) {
            return id === currentStepId || id === nextStep || id === nextStep + 1;
          } else if (currentStepId === totalSteps) {
            return id === currentStepId || id === previousStep || id === previousStep - 1;
          } else {
            return id === currentStepId || id === previousStep || id === nextStep;
          }
        }).map(({ id, title }) => {
          const isStepEnabled = enabledSteps[id];
          const isActive = currentStepId === id;

          return (
            <button
              key={id}
              onClick={() => isStepEnabled && setCurrentStepId(id)}
              disabled={!isStepEnabled}
              className={`text-sm max-xl:text-[14px] h-[60px] w-[180px] cursor-pointer rounded-full border-secondary py-2 font-bold border-2 ${
                isActive ? " bg-secondary text-white" : "bg-primary text-cText"
              } ${!isStepEnabled ? "disabled" : ""}`}
            >
              {title}
            </button>
          );
        })}

        <AiOutlineRight
          className={`cursor-pointer ${
            nextStep > totalSteps || !enabledSteps[nextStep]
              ? "text-secondary cursor-not-allowed"
              : "text-secondary"
          }`}
          onClick={() =>
            nextStep <= totalSteps && enabledSteps[nextStep] && setCurrentStepId(nextStep)
          }
          size={24}
        />
      </div>
    </div>
  );
};

export default StepsConfigurator;
