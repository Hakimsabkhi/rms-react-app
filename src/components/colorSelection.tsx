import React from "react";
import { colours, useCustomization } from "../components/Customization";

const ColorSelection: React.FC = () => {
  // 1. Consume the context values
  const { Colour, setColour } = useCustomization();

  return (
    <div className="mb-4">
      {/* Section title */}
      <h2 className="font-semibold text-xl mb-3">Select Color</h2>

      {/* Grid container for color swatches */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {colours.map((item, index) => {
          // Check if current colour is selected
          const isActive = item.colour === Colour.colour;
          return (
            <div
              key={index}
              onClick={() => setColour(item)}
              className={`
                flex flex-col items-center p-4 rounded-md cursor-pointer
                border transition-colors duration-200
                ${
                  isActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-100"
                }
              `}
            >
              {/* Swatch preview with a ring when active */}
              <div
                className={`
                  w-8 h-8 rounded-full mb-2
                  ${isActive ? "ring-2 ring-blue-500 ring-offset-2" : ""}
                `}
                style={{ backgroundColor: item.colour }}
              />

              {/* Color name label */}
              <span className="text-sm font-medium capitalize">{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelection;
