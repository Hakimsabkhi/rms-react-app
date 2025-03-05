import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMotorisation } from "../../../store/rideauSlice";

interface Step4Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step4: React.FC<Step4Props> = ({ enableNextButton }) => {
  const dispatch = useDispatch();
  const { motorisation, typeDeMotorisation } = useSelector((state: any) => ({
    motorisation: state.rideau.motorisation,
    typeDeMotorisation: state.rideau.typeDeMotorisation,
  }));

  const availableModes = ["Manuel", "Motorisé"];
  const availableTypes = ["Central", "Tubulaire", "Externe"];

  const defaultMode = motorisation || "Manuel";
  const defaultType = typeDeMotorisation || "";

  const [selectedMode, setSelectedMode] = useState<string>(defaultMode);
  const [selectedType, setSelectedType] = useState<string>(defaultType);

  useEffect(() => {
    const newMotorisation = {
      mode: selectedMode,
      type: selectedMode === "Motorisé" ? selectedType : "",
    };
    if (
      motorisation !== newMotorisation.mode ||
      typeDeMotorisation !== newMotorisation.type
    ) {
      dispatch(setMotorisation(newMotorisation));
    }
  }, [dispatch, motorisation, typeDeMotorisation, selectedMode, selectedType]);

  useEffect(() => {
    enableNextButton(selectedMode === "Motorisé" ? !!selectedType : !!selectedMode);
  }, [selectedMode, selectedType, enableNextButton]);

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedMode(value);
    if (value === "Manuel") {
      setSelectedType("");
      dispatch(setMotorisation({ mode: value, type: "" }));
    }
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedType(value);
    if (selectedMode === "Motorisé") {
      dispatch(setMotorisation({ mode: "Motorisé", type: value }));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4 place-items-center">
        {availableModes.map((mode) => (
          <label
            key={mode}
            className={`flex items-center justify-center w-full h-[40px] font-semibold rounded-full border-2 text-sm cursor-pointer transition-colors ${
              selectedMode === mode
                ? "bg-[#13182B] text-white border-[#13182B]"
                : "bg-white text-[#13182B] border-[#13182B]"
            }`}
          >
            <input
              type="radio"
              name="motorisationMode"
              value={mode}
              checked={selectedMode === mode}
              onChange={handleModeChange}
              className="hidden"
            />
            {mode}
          </label>
        ))}
      </div>
      {selectedMode === "Motorisé" && (
        <div className="grid grid-cols-3 gap-4 place-items-center mt-4">
          {availableTypes.map((type) => (
            <label
              key={type}
              className={`flex items-center justify-center w-full h-[40px] font-semibold rounded-full border-2 text-sm cursor-pointer transition-colors ${
                selectedType === type
                  ? "bg-[#13182B] text-white border-[#13182B]"
                  : "bg-white text-[#13182B] border-[#13182B]"
              }`}
            >
              <input
                type="radio"
                name="motorisationType"
                value={type}
                checked={selectedType === type}
                onChange={handleTypeChange}
                className="hidden"
              />
              {type}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default Step4;
