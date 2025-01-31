import React, { createContext, useContext, useState } from "react";

// 1. Define a type for your color items
export interface IColour {
  colour: string;
  name: string;
}

// 2. Export the array as an array of IColour
export const colours: IColour[] = [
  {
    colour: "#FF0000",
    name: "red",
  },
  {
    colour: "#1a5e1a",
    name: "green",
  },
  {
    colour: "#0000FF",
    name: "blue",
  },
  {
    colour: "#A020F0",
    name: "purple",
  },
  {
    colour: "#ffa500",
    name: "orange",
  },
  {
    colour: "#59555b",
    name: "grey",
  },
  {
    colour: "#000000",
    name: "black",
  },
  {
    colour: "#ececec",
    name: "white",
  },
];

// 3. Define the shape of your context
interface CustomizationContextType {
  Colour: IColour;
  setColour: React.Dispatch<React.SetStateAction<IColour>>;
}

// 4. Create the context with the proper type
const CustomizationContext = createContext<CustomizationContextType | null>(null);

// 5. Define your provider's props
interface CustomizationProviderProps {
  children: React.ReactNode;
}

// 6. Create the provider component
export const CustomizationProvider: React.FC<CustomizationProviderProps> = ({ children }) => {
  // You can pick an initial color from the array
  const [Colour, setColour] = useState<IColour>(colours[2]); 

  return (
    <CustomizationContext.Provider
      value={{
        Colour,
        setColour,
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

// 7. Custom hook to use the context
export const useCustomization = (): CustomizationContextType => {
  const context = useContext(CustomizationContext);
  if (!context) {
    throw new Error("useCustomization must be used within a CustomizationProvider");
  }
  return context;
};
