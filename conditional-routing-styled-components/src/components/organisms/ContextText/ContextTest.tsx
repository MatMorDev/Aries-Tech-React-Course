import { Layer1 } from "components/molecules/Layer1";
import { LayerA } from "components/molecules/LayerA";
import { createContext, useState } from "react";
import {
  AppGeneralContextType,
  AppContextDefaultValue,
} from "_shared/contexts/AppGeneralContext";

export const ContextTestPath: string = "contextTest";

//creo la mia istanza dei dati ed i loro valori ed usi  createContext
//questa variabile sarà "il mio cassetto" dei componenti che possono prendere context
export const AppGeneralContext = createContext<AppGeneralContextType>(
  AppContextDefaultValue
);

export const AppGeneralContextB = createContext<AppGeneralContextType>(
  AppContextDefaultValue
);

export const ContextTest = () => {
  const [title, setTitle] = useState("Nuovo title");
  const [titleB, setTitleB] = useState("Nuovo title B");

  //questo è il mio useState che passo ai componenti e che può essere settato
  const appContextValue: AppGeneralContextType = {
    title,
    setTitle,
  };

  const appContextValueB: AppGeneralContextType = {
    title: titleB,
    setTitle: setTitleB,
  };

  //nota per avere accesso ai valori del context i tag dei componenti devono essere messi dentro ad AppGeneralContext
  return (
    <>
      <AppGeneralContext.Provider value={appContextValue}>
        <h1>Context Test - {title}</h1>

        <Layer1 />
      </AppGeneralContext.Provider>

      <AppGeneralContext.Provider value={appContextValueB}>
        <LayerA />
      </AppGeneralContext.Provider>
    </>
  );
};
