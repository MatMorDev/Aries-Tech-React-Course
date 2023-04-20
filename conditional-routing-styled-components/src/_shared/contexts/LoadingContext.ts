import { createContext } from "react";

export interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (x: boolean) => void;
}

const LoadingContextDefaultValue = {
  isLoading: false,
  setIsLoading: (_: boolean) => {},
};

export const LoadingContext = createContext<LoadingContextType>(
  LoadingContextDefaultValue
);
