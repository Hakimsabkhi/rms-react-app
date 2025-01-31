// Step2.tsx
import React from "react";

interface Step2Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step2: React.FC<Step2Props> = ({ enableNextButton }) => {
  React.useEffect(() => {
    enableNextButton(true);
  }, [enableNextButton]);

  return (
    <div>
      <h2>Step 2: Type de lame</h2>
      {/* Step 2 contents... */}
    </div>
  );
};

export default Step2;
