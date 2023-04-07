import { Todo } from "types";
import axios, { AxiosResponse } from "axios";

export const taskDetail = async (id: number): Promise<Todo | undefined> => {
  const resp = axios
    .get(`https://dummyjson.com/todos/${id}`)
    .then(function (response: AxiosResponse<Todo>) {
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
