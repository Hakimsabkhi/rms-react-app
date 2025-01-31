import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RideauState {
  typeDePose: {
    mainType: string;
    subType: string;
  };
  typeDeLames: string;
  Couleurs: string;
  motorisation: string;
  typeDeMotorisation: string;
  serrure: string;
  typeDeSerrure: string;
  Accessoires: string;

  multiplier: number;
  deliveryOption: string;
  fullNameOrCompany: string;
  email: string;
  phoneNumber: string;
  postalCode: string;
  city: string;
  deliveryAddress: string;
}

const initialState: RideauState = {
  typeDePose: {
    mainType: "En applique",  // ✅ Default main type
    subType: "extérieur",      // ✅ Default sub-type
  },
  typeDeLames: "",
  Couleurs: "",
  motorisation: "",
  typeDeMotorisation: "",
  serrure: "",
  typeDeSerrure: "",
  Accessoires: "",

  multiplier: 1,
  deliveryOption: "",
  fullNameOrCompany: "",
  email: "",
  phoneNumber: "",
  postalCode: "",
  city: "",
  deliveryAddress: "",
};

const rideauSlice = createSlice({
  name: "RideauMetallique",
  initialState,
  reducers: {
    setRideauFromDevis: (state, action: PayloadAction<RideauState>) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
    setMultiplier: (state, action: PayloadAction<number>) => {
      state.multiplier = action.payload;
    },
    setTypeDePose: (state, action: PayloadAction<{ mainType: string; subType: string }>) => {
      state.typeDePose = action.payload;
      console.log("Updated typeDePose in Redux store:", state.typeDePose);
    },
  },
});

export const { setRideauFromDevis, reset, setMultiplier, setTypeDePose } = rideauSlice.actions;

// Selectors
export const selectRideauMetallique = (state: { RideauMetallique: RideauState }) =>
  state.RideauMetallique;

export default rideauSlice.reducer;
