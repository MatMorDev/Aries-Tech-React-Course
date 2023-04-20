import { createContext } from "react";

export interface AppGeneralContextType {
  title: string;
  setTitle: (x: string) => void;
}

//questa è la mia constante di default che non cambia mai
export const AppContextDefaultValue: AppGeneralContextType = {
  title: "default",
  setTitle: (_: string) => {},
};

export const AppGeneralContext = createContext<AppGeneralContextType>(
  AppContextDefaultValue
);
