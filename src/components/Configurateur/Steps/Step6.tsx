// Step6.tsx
import React from "react";

interface Step6Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step6: React.FC<Step6Props> = ({ enableNextButton }) => {
  React.useEffect(() => {
    enableNextButton(true);
  }, [enableNextButton]);

  return (
    <div>
      <h2>Step </h2>
      {/* Step 2 contents... */}
    </div>
  );
};

export default Step6;
