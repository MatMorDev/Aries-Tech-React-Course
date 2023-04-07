import { ToDoListResponse } from "types";
import todos from "./mock/todosList.json";
import axios, { AxiosResponse } from "axios";
//skip: number | undefined
export const todosList = async (
  skip?: number
): Promise<ToDoListResponse | undefined> => {
  const resp = axios
    .get("https://dummyjson.com/todos" + (skip ? `?skip=${skip}` : ""))
    .then(function (response: AxiosResponse<ToDoListResponse>) {
      // handle success
      console.log(response);
      //risolve axios.get e l'oggetto che stiamo passando
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log("ERROR", error);
      return undefined;
    })
    .finally(function () {
      // always executed
    });
  return resp;
};

//export const todosList = async (): Promise<ToDoListResponse> => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(todos);
//     }, 1000);
//   });
//};
