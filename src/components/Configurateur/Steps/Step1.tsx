import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypeDePose, selectRideauMetallique } from "../../../store/rideauSlice";
import { StepsData } from "../../../assets/data";

interface Step1Props {
  enableNextButton: (isEnabled: boolean) => void;
}

const Step1: React.FC<Step1Props> = ({ enableNextButton }) => {
  const dispatch = useDispatch();
  const rideauState = useSelector(selectRideauMetallique);

  // Load initial values from Redux (mainType and subType)
  const defaultMainType = rideauState?.typeDePose?.mainType || "En applique";
  const defaultSubType = rideauState?.typeDePose?.subType || "extérieur";

  // State to manage selected values
  const [selectedMainType, setSelectedMainType] = useState(defaultMainType);
  const [selectedSubType, setSelectedSubType] = useState(defaultSubType);

  const step1Data = StepsData.find((item) => item.id === 1);

  // Sync Redux state with local state on mount
  useEffect(() => {
    if (
      rideauState?.typeDePose?.mainType !== selectedMainType ||
      rideauState?.typeDePose?.subType !== selectedSubType
    ) {
      dispatch(setTypeDePose({ mainType: selectedMainType, subType: selectedSubType }));
      console.log("Initialized Redux with:", { mainType: selectedMainType, subType: selectedSubType });
    }
  }, [dispatch, rideauState?.typeDePose, selectedMainType, selectedSubType]);

  // Enable the "Next" button only if both selections are made
  useEffect(() => {
    enableNextButton(!!(selectedMainType && selectedSubType));
  }, [selectedMainType, selectedSubType, enableNextButton]);

  // Handle main type selection
  const handleMainTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMainType = event.target.value;
    const newSubType = "extérieur"; // Default sub-type when changing main type

    setSelectedMainType(newMainType);
    setSelectedSubType(newSubType);
    dispatch(setTypeDePose({ mainType: newMainType, subType: newSubType }));

    console.log("Main type changed:", { mainType: newMainType, subType: newSubType });
  };

  // Handle sub-type selection
  const handleSubTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSubType = event.target.value;

    setSelectedSubType(newSubType);
    dispatch(setTypeDePose({ mainType: selectedMainType, subType: newSubType }));

    console.log("Sub type changed:", { mainType: selectedMainType, subType: newSubType });
  };

  const chosenType = step1Data?.mainTypes?.find((pose) => pose.mainType === selectedMainType);

  return (
    <div className="flex flex-col gap-2">
      {/* Main Type Selection */}
      <div className="flex justify-center gap-4 my-2">
        {step1Data?.mainTypes?.map((pose) => (
          <label
            key={pose.mainType}
            className={`flex items-center justify-center w-[150px] h-[40px] 
                        font-semibold rounded-full border-2 text-sm 
                        cursor-pointer transition-colors
                        ${selectedMainType === pose.mainType 
                          ? "bg-[#13182B] text-white border-[#13182B]"
                          : "bg-white text-[#13182B] border-[#13182B]"
                        }`}
          >
            <input
              type="radio"
              name="mainType"
              value={pose.mainType}
              checked={selectedMainType === pose.mainType} // ✅ Ensures correct selection
              onChange={handleMainTypeChange}
              className="hidden"
            />
            {pose.mainType}
          </label>
        ))}
      </div>

      {/* Sub-Type Selection */}
      {chosenType && (
        <div className="flex flex-col gap-2">
          <h2 className="text-center text-xl font-semibold">
            Choisissez l&apos;enroulement pour {selectedMainType}
          </h2>

          <div className="flex justify-center gap-4 mb-4">
            {chosenType.subTypes.map((sub) => (
              <label
                key={sub}
                className={`flex items-center justify-center w-[150px] h-[40px] 
                            font-semibold rounded-full border-2 text-sm 
                            cursor-pointer transition-colors
                            ${selectedSubType === sub
                              ? "bg-[#13182B] text-white border-[#13182B]"
                              : "bg-white text-[#13182B] border-[#13182B]"
                            }`}
              >
                <input
                  type="radio"
                  name="subType"
                  value={sub}
                  checked={selectedSubType === sub} // ✅ Ensures correct selection
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

export default Step1;
