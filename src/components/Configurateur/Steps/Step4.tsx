// Step4.tsx
import React from "react";

interface Step4Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step4: React.FC<Step4Props> = ({ enableNextButton }) => {
  React.useEffect(() => {
    enableNextButton(true);
  }, [enableNextButton]);

  return (
    <div>
      <h2>Step 4</h2>
      {/* Step 2 contents... */}
    </div>
  );
};

export default Step4;
