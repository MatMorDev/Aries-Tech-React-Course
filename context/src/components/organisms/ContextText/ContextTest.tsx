import { Layer1 } from "components/molecules/Layer1";
import { createContext, useState } from "react";

export const ContextTestPath: string = "contextTest";

export interface AppGeneralContextType {
  title: string;
  setTitle: (x: string) => void;
}

const AppContextInitialValue: AppGeneralContextType = {
  title: "",
  setTitle: (_: string) => {},
};

export const AppGeneralContext = createContext<AppGeneralContextType>(
  AppContextInitialValue
);

export const ContextTest = () => {
  const [title, setTitle] = useState("Nuovo title");

  const appContextValue: AppGeneralContextType = {
    title,
    setTitle,
  };

  return (
    <AppGeneralContext.Provider value={appContextValue}>
      <h1>Context Test - {title}</h1>

      <Layer1 />
    </AppGeneralContext.Provider>
  );
};
