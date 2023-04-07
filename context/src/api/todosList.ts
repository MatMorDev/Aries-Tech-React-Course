import { ToDoListResponse } from "types";
import todos from "./mock/todosList.json";
import axios, { AxiosResponse } from "axios";
//skip: number | undefined
export const todosList = async (
  skip?: number,
  pageSize?: number
): Promise<ToDoListResponse | undefined> => {
  const finalSkip = !!skip ? skip : 0;
  const queryParameters = [`limit=${pageSize}`, `skip=${finalSkip}`];
  //costruisco la query con l'array di stringhe
  const query = queryParameters.join("&");

  const resp = axios
    .get(`https://dummyjson.com/todos?${query}`)
    .then(function (response: AxiosResponse<ToDoListResponse>) {
      // handle success
      //risolve axios.get e l'oggetto che stiamo passando
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log("ERROR", error);
      return undefined;
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
