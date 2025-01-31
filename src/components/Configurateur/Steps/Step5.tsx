// Step5.tsx
import React from "react";

interface Step5Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step5: React.FC<Step5Props> = ({ enableNextButton }) => {
  React.useEffect(() => {
    enableNextButton(true);
  }, [enableNextButton]);

  return (
    <div>
      <h2>Step 5</h2>
      {/* Step 2 contents... */}
    </div>
  );
};

export default Step5;
