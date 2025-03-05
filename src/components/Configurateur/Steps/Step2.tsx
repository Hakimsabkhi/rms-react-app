import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTypeDeLames,
  selectRideauMetallique,
} from "../../../store/rideauSlice";
import { StepsData } from "../../../assets/data";

interface Step2Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step2: React.FC<Step2Props> = ({ enableNextButton }) => {
  const dispatch = useDispatch();
  const rideauState = useSelector(selectRideauMetallique);

  // Load initial values from Redux (mainType and subType)
  const defaultMainType = rideauState?.typeDeLames?.mainType || "";
  const defaultSubType = rideauState?.typeDeLames?.subType || "";

  // State to manage selected values
  const [selectedMainType, setSelectedMainType] = useState(defaultMainType);
  const [selectedSubType, setSelectedSubType] = useState(defaultSubType);

  const step2Data = StepsData.find((item) => item.id === 2);

  // Sync Redux state with local state on mount
  useEffect(() => {
    if (
      rideauState?.typeDeLames?.mainType !== selectedMainType ||
      rideauState?.typeDeLames?.subType !== selectedSubType
    ) {
      dispatch(
        setTypeDeLames({ mainType: selectedMainType, subType: selectedSubType })
      );
      console.log("Initialized Redux with:", {
        mainType: selectedMainType,
        subType: selectedSubType,
      });
    }
  }, [dispatch, rideauState?.typeDeLames, selectedMainType, selectedSubType]);

  // Enable the "Next" button only if the mainType is selected
  useEffect(() => {
    enableNextButton(!!selectedMainType);
  }, [selectedMainType, selectedSubType, enableNextButton]);

  // Handle main type selection
  const handleMainTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMainType = event.target.value;
    setSelectedMainType(newMainType);

    // Reset subType when changing mainType
    setSelectedSubType("");
    dispatch(setTypeDeLames({ mainType: newMainType, subType: "" }));

    console.log("Main type changed:", { mainType: newMainType, subType: "" });
  };

  // Handle sub-type selection (for Grille cobra)
  const handleSubTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSubType = event.target.value;
    setSelectedSubType(newSubType);
    dispatch(
      setTypeDeLames({ mainType: selectedMainType, subType: newSubType })
    );

    console.log("Sub type changed:", {
      mainType: selectedMainType,
      subType: newSubType,
    });
  };

  const chosenType = step2Data?.mainTypes?.find(
    (type) => type.mainType === selectedMainType
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Main Type Selection */}
      <div className="grid grid-cols-2 gap-4 place-items-center">
        {step2Data?.mainTypes?.map((type) => (
          <label
            key={type.mainType}
            className={`flex items-center justify-center w-full h-[40px] font-semibold rounded-full border-2 text-sm cursor-pointer transition-colors
                  ${
                    selectedMainType === type.mainType
                      ? "bg-[#13182B] text-white border-[#13182B]"
                      : "bg-white text-[#13182B] border-[#13182B]"
                  }`}
          >
            <input
              type="radio"
              name="mainType"
              value={type.mainType}
              checked={selectedMainType === type.mainType}
              onChange={handleMainTypeChange}
              className="hidden"
            />
            {type.mainType}
          </label>
        ))}
      </div>

      {/* Sub-Type Selection (if Grille cobra selected) */}
      {chosenType?.mainType === "Grille cobra" && (
        <div className="flex flex-col gap-2">
          <h3 className="text-center text-lg font-semibold">
            Choisissez le type de grille
          </h3>
          <div className="grid grid-cols-2 gap-4 place-items-center">
            {chosenType.subTypes?.map((sub) => (
              <label
                key={sub}
                className={`flex items-center justify-center w-full h-[40px] font-semibold rounded-full border-2 text-sm 
                            cursor-pointer transition-colors
                            ${
                              selectedSubType === sub
                                ? "bg-[#13182B] text-white border-[#13182B]"
                                : "bg-white text-[#13182B] border-[#13182B]"
                            }`}
              >
                <input
                  type="radio"
                  name="subType"
                  value={sub}
                  checked={selectedSubType === sub} 
                  onChange={handleSubTypeChange}
                  className="hidden"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Step2;
