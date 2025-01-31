import  { useState } from "react";
import Scene from "./components/Scene";
import ConfiguratorWindow from "./components/Configurateur/ConfiguratorWindow";
import { RiSettings3Fill } from "react-icons/ri";
import Layout from "./layout";
import "./index.css";
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  const [lastStepId, setLastStepId] = useState(1);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleStepChange = (stepId: number) => {
    setLastStepId(stepId); // Update the last step reached
  };

  const handleSelectionsChange = (selections: any) => {
    // Handle changes in selections here
    console.log("Selections changed:", selections);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
     <Layout>
  
      <Scene />
      <div className="fixed flex flex-col gap-4 top-[3%] left-[3%] max-lg:top-[0] w-[30%] h-[80%] max-lg:w-full max-lg:h-full max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2 max-lg:justify-between bg-blend-overlay inset-0 pointer-events-none">
        <div className="mt-4 flex gap-[5%] justify-center items-center pointer-events-auto">
          <button
            className="w-[50px] h-[50px] border-none cursor-pointer flex items-center justify-center bg-cbutton shadow-[0_2px_6px_rgba(0,0,0,0.952)] rounded-full transition-shadow hover:bg-cwhite focus:bg-cwhite"
            onClick={toggleMenu}
          >
            <RiSettings3Fill size={34} />
          </button>
          <h2 className="flex items-center text-2xl max-2xl:text-xl max-xl:text-base max-lg:text-base max-md:text-sm w-fit h-full uppercase font-semibold">
            Configurer mon volet
          </h2>
        </div>

        {/* Conditionally render the Configurator window */}
        {menuVisible && (
           <Provider store={store}>
          <ConfiguratorWindow
            onSelectionsChange={handleSelectionsChange}
            initialStep={lastStepId}
            onStepChange={handleStepChange}
          />
          </Provider>
        )}
      </div>
      </Layout>
    </>
  );
};

export default App;
