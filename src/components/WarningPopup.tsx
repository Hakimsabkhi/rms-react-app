import React from "react"; 
import exitIcon from "../assets/exit.png";

interface WarningPopupProps {
  message: string;
  onClose: () => void;
}

const WarningPopup: React.FC<WarningPopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-1000 transition-opacity duration-300 ease-in-out opacity-100">
      <div className="bg-primary rounded-[10px] text-center w-[30%] max-md:w-[80%] h-fit flex gap-1 flex-col justify-center px-4 py-6 transition-transform duration-300 ease-in-out transform translate-y-0">
        <button onClick={onClose} className="absolute top-2 right-2">
          <img src={exitIcon} loading="eager" alt="Outside View" width={30} height={30}/>
        </button>
        <h3 className=" text-[#c30010] text-2xl max-md:text-xl font-bold uppercase"> Notification </h3>
        <p className="text-cText text-lg max-md:text-sm">{message}</p>
      </div>
    </div>
  );
};

export default WarningPopup;
