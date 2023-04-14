import axios, { AxiosResponse } from "axios";
import { LoginCallResponse } from "types/Response/LoginCallResponse";

const baseUrl = "https://dummyjson.com";

interface LoginRequest {
  username: string;
  password: string;
}

export const loginCall = async (username: string, password: string) => {
  const request: LoginRequest = { username, password };
  return await axios
    .post(`${baseUrl}/auth/login`, request)
    .then((response: AxiosResponse<LoginCallResponse>) => {
      return response.data;
    })
    .catch(() => {
      return undefined;
    });
};
