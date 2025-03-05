import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCouleurs, selectRideauMetallique } from "../../../store/rideauSlice";
import { StepsData } from "../../../assets/data";

interface Step3Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step3: React.FC<Step3Props> = ({ enableNextButton }) => {
  const dispatch = useDispatch();
  const rideauState = useSelector(selectRideauMetallique);

  // Retrieve the step data for "Couleurs"
  const step3Data = StepsData.find((item) => item.id === 3);
  const availableColors = step3Data?.AvailableColors || [];

  // Check if the initial Redux color is one of the available colors
  const defaultColor = rideauState?.Couleurs || "";
  const isCustomInitial = defaultColor && !availableColors.includes(defaultColor);

  // Local state: selectedColor holds a preset color or the string "custom"
  const [selectedColor, setSelectedColor] = useState<string>(
    isCustomInitial ? "custom" : defaultColor
  );
  // Local state for the custom text input value
  const [customColor, setCustomColor] = useState<string>(
    isCustomInitial ? defaultColor : ""
  );

  // Sync Redux state with local state: dispatch either the preset or custom color
  useEffect(() => {
    const colorToDispatch = selectedColor === "custom" ? customColor : selectedColor;
    if (rideauState?.Couleurs !== colorToDispatch) {
      dispatch(setCouleurs(colorToDispatch));
      console.log("Updated Redux with Couleurs:", colorToDispatch);
    }
  }, [dispatch, rideauState?.Couleurs, selectedColor, customColor]);

  // Enable the "Next" button: if custom is selected, require a non-empty customColor
  useEffect(() => {
    if (selectedColor === "custom") {
      enableNextButton(!!customColor);
    } else {
      enableNextButton(!!selectedColor);
    }
  }, [selectedColor, customColor, enableNextButton]);

  // Handle change for preset and custom radio buttons
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "custom") {
      setSelectedColor("custom");
      console.log("Selected custom color option");
    } else {
      setSelectedColor(value);
      setCustomColor(""); // Clear custom input when a preset is chosen
      dispatch(setCouleurs(value));
      console.log("Color changed:", value);
    }
  };

  // Handle text input change for custom color
  const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCustomColor(value);
    if (selectedColor === "custom") {
      dispatch(setCouleurs(value));
      console.log("Custom color changed:", value);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-raw-3 gap-4 place-items-center">
        {/* Preset color options */}
        {availableColors.map((color) => (
          <label
            key={color}
            className={`flex items-center justify-center w-full h-[40px] font-semibold rounded-full border-2 text-sm cursor-pointer transition-colors
              ${
                selectedColor === color
                  ? "bg-[#13182B] text-white border-[#13182B]"
                  : "bg-white text-[#13182B] border-[#13182B]"
              }`}
          >
            <input
              type="radio"
              name="couleur"
              value={color}
              checked={selectedColor === color}
              onChange={handleColorChange}
              className="hidden"
            />
            {color}
          </label>
        ))}
        {/* Custom option */}
        <label
          className={`flex items-center justify-center w-full h-[40px] font-semibold rounded-full border-2 text-sm cursor-pointer transition-colors
            ${
              selectedColor === "custom"
                ? "bg-[#13182B] text-white border-[#13182B]"
                : "bg-white text-[#13182B] border-[#13182B]"
            }`}
        >
          <input
            type="radio"
            name="couleur"
            value="custom"
            checked={selectedColor === "custom"}
            onChange={handleColorChange}
            className="hidden"
          />
          Choisir un autre couleur
        </label>
      </div>

      {/* Show text input for custom color if "Custom" is selected */}
      {selectedColor === "custom" && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter custom color"
            value={customColor}
            onChange={handleCustomColorChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      )}
    </div>
  );
};

export default Step3;
