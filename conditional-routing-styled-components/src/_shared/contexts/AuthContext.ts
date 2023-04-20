import { createContext } from "react";
import { LoginCallResponse } from "types/Response/LoginCallResponse";

//lo rendo opzionale, in modo da fare il valore di default vuoto(undefined)
export interface AuthContextType {
  user?: LoginCallResponse;
  setUser: (x: LoginCallResponse | undefined) => void;
}
const AuthContextDefaultValue: AuthContextType = {
  setUser(_: LoginCallResponse | undefined) {},
};

export const AuthContext = createContext<AuthContextType>(
  AuthContextDefaultValue
);
