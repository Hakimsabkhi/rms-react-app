import React, { useMemo } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { StepsData } from "../../assets/data";

interface StepsNavigationProps {
  currentStepId: number;
  setCurrentStepId: (stepId: number) => void;
  enabledSteps: { [key: number]: boolean };
}

const StepsNavigation: React.FC<StepsNavigationProps> = ({ currentStepId, setCurrentStepId, enabledSteps }) => {
  const steps = useMemo(() => StepsData, []);
  const totalSteps = steps.length;

  return (
    <div className="flex flex-col justify-center rounded-[16px] bg-primary p-[10px] gap-2 py-2 mb-2 max-lg:hidden">
      <h1 className="font-bold text-center text-lg uppercase max-xl:text-xs max-lg:text-[10px] text-cText">
        Volet roulant rénovation sur mesure
      </h1>

      <div className="flex justify-center items-center gap-[5px]">
        <AiOutlineLeft
          className={`cursor-pointer ${
            currentStepId === 1 || !enabledSteps[currentStepId - 1]
              ? "text-secondary cursor-not-allowed"
              : "text-secondary"
          }`}
          onClick={() => currentStepId > 1 && enabledSteps[currentStepId - 1] && setCurrentStepId(currentStepId - 1)}
          size={24}
        />

        {steps
          .filter(({ id }) =>
            currentStepId === 1
              ? id === currentStepId || id === currentStepId + 1 || id === currentStepId + 2
              : currentStepId === totalSteps
              ? id === currentStepId || id === currentStepId - 1 || id === currentStepId - 2
              : id === currentStepId || id === currentStepId - 1 || id === currentStepId + 1
          )
          .map(({ id, title }) => (
            <button
              key={id}
              onClick={() => enabledSteps[id] && setCurrentStepId(id)}
              disabled={!enabledSteps[id]}
              className={`text-sm max-xl:text-[14px] h-[60px] w-[180px] cursor-pointer rounded-full border-secondary py-2 font-bold border-2 ${
                currentStepId === id ? " bg-secondary text-white" : "bg-primary text-cText"
              } ${!enabledSteps[id] ? "disabled" : ""}`}
            >
              {title}
            </button>
          ))}

        <AiOutlineRight
          className={`cursor-pointer ${
            currentStepId === totalSteps || !enabledSteps[currentStepId + 1]
              ? "text-secondary cursor-not-allowed"
              : "text-secondary"
          }`}
          onClick={() =>
            currentStepId < totalSteps && enabledSteps[currentStepId + 1] && setCurrentStepId(currentStepId + 1)
          }
          size={24}
        />
      </div>
    </div>
  );
};

export default StepsNavigation;
