import React, { useState, useEffect, useCallback } from "react";
import StepsConfigurator from "./StepsConfigurator";
import StepsComponentHandler from "./StepsComponentHandler";
import StepNavigationButtons from "./StepNavigationButtons";
import WarningPopup from "../WarningPopup";
import { reset } from "../../store/rideauSlice";
import { useDispatch } from "react-redux";


interface ConfiguratorWindowProps {
  initialStep: number; // Initial step passed from parent
  onStepChange?: (stepId: number) => void; // Optional callback
  onSelectionsChange?: (selections: any) => void; // <== Add or uncomment this line!
  // ...other props if needed
}

interface EnabledSteps {
  [key: number]: boolean;
}

const ConfiguratorMenu: React.FC<ConfiguratorWindowProps> = ({
  initialStep,
  onStepChange,
}) => {
  const [currentStepId, setCurrentStepId] = useState(initialStep);
  const [enabledSteps, setEnabledSteps] = useState<EnabledSteps>({ 1: true });
  const [stepTitle, setStepTitle] = useState("");
  const [showWarningPopup, setShowWarningPopup] = useState(false);
  const [showInformation, setShowInformation] = useState(false);

  const dispatch = useDispatch(); 

    // Handle "Créer Nouvelle Devis" which resets the slice and goes to the first step
    const handleCreateNewDevis = () => {
      dispatch(reset()); 
      setCurrentStepId(1); 
      setShowInformation(false); 
    };

  // Track "Next" button state for the current step
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);

    // Reset to the first step and hide information (for modify button)
    const modifyProduct = () => {
      setCurrentStepId(1);
      setShowInformation(false);
    };

  const enableNextButton = useCallback(
    (isEnabled: boolean) => {
      setIsNextButtonEnabled(isEnabled);
      // Dynamically enable the next step if needed
      setEnabledSteps((prev) => ({
        ...prev,
        [currentStepId + 1]: isEnabled,
      }));
    },
    [currentStepId]
  );

  // Update the current step if the parent changes "initialStep"
  useEffect(() => {
    setCurrentStepId(initialStep);
  }, [initialStep]);

  // Move to the previous step if possible
  const previousStep = () => {
    if (currentStepId > 1) {
      setCurrentStepId((prev) => prev - 1);
    }
  };

  // Move to the next step if allowed, otherwise show the warning popup
  const nextStep = () => {
    if (isNextButtonEnabled && currentStepId < 5) {
      setCurrentStepId((prev) => prev + 1);
    } else {
      setShowWarningPopup(true); // Show the warning popup if Next button is disabled
    }
  };

  // Optional: Notify parent whenever the step changes
  useEffect(() => {
    if (onStepChange) {
      onStepChange(currentStepId);
    }
  }, [currentStepId, onStepChange]);

  return (
    <div className="flex flex-col max-lg:absolute max-lg:bottom-0 max-lg:left-0 p-4 max-lg:w-full pointer-events-auto">
      {/* Step navigation */}
      <StepsConfigurator
        currentStepId={currentStepId}
        setCurrentStepId={setCurrentStepId}
        enabledSteps={enabledSteps}
        onStepTitleChange={setStepTitle}
      />

      {/* Step content handler */}
      <StepsComponentHandler
        currentStepId={currentStepId}
        stepTitle={stepTitle}
        enableNextButton={enableNextButton}
      />

      {/* Navigation buttons */}
      <StepNavigationButtons
        currentStepId={currentStepId}
        stepsLength={5}
        previousStep={previousStep}
        nextStep={nextStep}
        modifyProduct={modifyProduct}
        toggleInformationDisplay={() => setShowInformation(!showInformation)}
        isNextButtonEnabled={isNextButtonEnabled}
        resetToFirstStep={handleCreateNewDevis}
      />

      {/* Warning popup */}
      {showWarningPopup && (
        <WarningPopup
          message="Encore des options doivent être sélectionnées avant de passer à l'étape suivante!"
          onClose={() => setShowWarningPopup(false)}
        />
      )}
    </div>
  );
};

export default ConfiguratorMenu;
