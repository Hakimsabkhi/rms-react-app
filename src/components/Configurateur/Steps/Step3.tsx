// Step3.tsx
import React from "react";

interface Step3Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step2: React.FC<Step3Props> = ({ enableNextButton }) => {
  React.useEffect(() => {
    enableNextButton(true);
  }, [enableNextButton]);

  return (
    <div>
      <h2>Step 3: Type de lame</h2>
      {/* Step 2 contents... */}
    </div>
  );
};

export default Step2;
