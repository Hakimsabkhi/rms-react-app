import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../store/rideauSlice";
import { StepsData } from "../../assets/data";
import WarningPopup from "../WarningPopup";
import StepsNavigation from "./StepsNavigation";
import StepNavigationButtons from "./StepNavigationButtons";
import StepRenderer from "./StepRenderer"; 

interface ConfiguratorWindowProps {
  initialStep: number;
  onStepChange?: (stepId: number) => void;
}

const ConfiguratorWindow: React.FC<ConfiguratorWindowProps> = ({ initialStep, onStepChange}) => {
  const dispatch = useDispatch();
  const [currentStepId, setCurrentStepId] = useState(initialStep);
  const [enabledSteps, setEnabledSteps] = useState<{ [key: number]: boolean }>({ 1: true });
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const [showWarningPopup, setShowWarningPopup] = useState(false);
  const [showInformation, setShowInformation] = useState(false);

  useEffect(() => {
    setCurrentStepId(initialStep);
  }, [initialStep]);

  useEffect(() => {
    if (onStepChange) {
      onStepChange(currentStepId);
    }
  }, [currentStepId, onStepChange]);

  const enableNextButton = useCallback(
    (isEnabled: boolean, selections?: any) => {
      setIsNextButtonEnabled(isEnabled);
      setEnabledSteps((prev) => ({ ...prev, [currentStepId + 1]: isEnabled }));

  
    },
    [currentStepId]
  );

  const handleCreateNewDevis = () => {
    dispatch(reset());
    setCurrentStepId(1);
  };

  const previousStep = () => {
    if (currentStepId > 1) setCurrentStepId((prev) => prev - 1);
  };

  const nextStep = () => {
    if (isNextButtonEnabled && currentStepId < StepsData.length) {
      setCurrentStepId((prev) => prev + 1);
    } else {
      setShowWarningPopup(true);
    }
  };

  const modifyProduct = () => {
    setCurrentStepId(1);
    setShowInformation(false);
  };

  return (
    <div className="flex flex-col max-lg:absolute max-lg:bottom-0 max-lg:left-0 p-4 max-lg:w-full pointer-events-auto">
      {/* Steps Navigation */}
      <StepsNavigation currentStepId={currentStepId} setCurrentStepId={setCurrentStepId} enabledSteps={enabledSteps} />

      {/* Step Content */}
      <div className="flex flex-col bg-primary p-[10px] max-md:min-h-[10px] rounded-t-[16px] gap-2">
        <h1 className="font-bold text-center uppercase text-xl max-xl:text-xs max-lg:text-sm text-cText">
          {StepsData.find((step) => step.id === currentStepId)?.title}
        </h1>
        <StepRenderer currentStepId={currentStepId} enableNextButton={enableNextButton} /> {/* ✅ Uses new component */}
      </div>

      {/* Navigation Buttons */}
      <StepNavigationButtons
        currentStepId={currentStepId}
        stepsLength={StepsData.length}
        previousStep={previousStep}
        nextStep={nextStep}
        modifyProduct={modifyProduct}
        toggleInformationDisplay={() => setShowInformation(!showInformation)}
        isNextButtonEnabled={isNextButtonEnabled}
        resetToFirstStep={handleCreateNewDevis}
      />

      {/* Warning Popup */}
      {showWarningPopup && (
        <WarningPopup
          message="Encore des options doivent être sélectionnées avant de passer à l'étape suivante!"
          onClose={() => setShowWarningPopup(false)}
        />
      )}
    </div>
  );
};

export default ConfiguratorWindow;
