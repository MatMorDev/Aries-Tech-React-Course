import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";
import { taskDetail } from "../../../api";
import { useState, useEffect, useMemo } from "react";
import { Todo } from "types";

export const TaskDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState<Todo | undefined>(undefined);
  let { id } = useParams<"id">();

  // questo nella global va tolta usando gli hook, inserita in useMemo
  // if (!id) {
  //   return <NotFound />;
  // }

  const getTodo = async (id: number) => {
    setIsLoading(true);
    const response = await taskDetail(id);
    //se presente response restituisci i todos
    setTodo(response);
  };

  useEffect(() => {
    getTodo(Number(id));
  }, [todo]);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [todo, isLoading]);

  const showTodo = useMemo(() => {
    if (!id) {
      return <NotFound />;
    }
    if (isLoading) {
      return <li>Is Loading..</li>;
    }
    if (todo) {
      return (
        <div>
          <div>Task number {todo.id}</div> <div>Detail: {todo.todo}</div>
          <div>
            userId:
            {todo.userId}
          </div>
          <div>{todo.completed ? "Completed" : "Not Completed"}</div>
        </div>
      );
    } else {
      return <li>There is no todo</li>;
    }
    //la memo si scatena solo quando cambia il todos
  }, [id, todo, isLoading]);

  return <>{showTodo}</>;
};
