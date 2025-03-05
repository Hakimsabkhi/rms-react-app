import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface RideauState {
  typeDePose: {
    mainType: string;
    subType: string;
  };
  typeDeLames: {
    mainType: string;
    subType?: string;
  };
  Couleurs: string;
  motorisation: string; // will store the mode ("Manuel" or "Motorisé")
  typeDeMotorisation: string; // will store the motorisation type (e.g., "Central")
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
    mainType: "En applique",
    subType: "extérieur",
  },
  typeDeLames: {
    mainType: "Lames Pleines",
  },
  Couleurs: "",
  motorisation: "Manuel",
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
      const updatedState = { ...state, ...action.payload };
      console.log("Updated via setRideauFromDevis:", updatedState);
      return updatedState;
    },
    reset: () => {
      console.log("State reset to initial", initialState);
      return initialState;
    },
    setMultiplier: (state, action: PayloadAction<number>) => {
      state.multiplier = action.payload;
      console.log("Updated multiplier:", state.multiplier);
    },
    setTypeDePose: (
      state,
      action: PayloadAction<{ mainType: string; subType: string }>
    ) => {
      state.typeDePose = action.payload;
      console.log("Updated typeDePose:", state.typeDePose);
    },
    setTypeDeLames: (
      state,
      action: PayloadAction<{ mainType: string; subType?: string }>
    ) => {
      state.typeDeLames = action.payload;
      console.log("Updated typeDeLames:", state.typeDeLames);
    },
    setCouleurs: (state, action: PayloadAction<string>) => {
      state.Couleurs = action.payload;
      console.log("Updated Couleurs:", state.Couleurs);
    },
    // Updated setMotorisation to accept an object with both mode and type
    setMotorisation: (
      state,
      action: PayloadAction<{ mode: string; type: string }>
    ) => {
      state.motorisation = action.payload.mode;
      state.typeDeMotorisation = action.payload.type;
      console.log(
        "Updated motorisation:",
        state.motorisation,
        "and typeDeMotorisation:",
        state.typeDeMotorisation
      );
    },
    // Optionally, you can keep or remove this if you have cases where only the type is updated
    setTypeDeMotorisation: (state, action: PayloadAction<string>) => {
      state.typeDeMotorisation = action.payload;
      console.log("Updated typeDeMotorisation:", state.typeDeMotorisation);
    },
  },
});

export const {
  setRideauFromDevis,
  reset,
  setMultiplier,
  setTypeDePose,
  setTypeDeLames,
  setCouleurs,
  setMotorisation,
  setTypeDeMotorisation,
} = rideauSlice.actions;

// Selector expects the store state to have a property called "rideau"
export const selectRideauMetallique = (state: RootState) => state.rideau;

export default rideauSlice.reducer;
