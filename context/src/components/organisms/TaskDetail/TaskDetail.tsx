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

export const TaskDetailPath: string = "taskdetail";

export const TaskDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState<Todo | undefined>(undefined);
  let { id } = useParams<"id">();

  useEffect(() => {
    getTodo(Number(id));
  }, [id]);

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [todo, isLoading]);

  const getTodo = async (id: number) => {
    setIsLoading(true);
    const response = await taskDetail(id);
    setTodo(response);
  };

  const showTodo = useMemo(() => {
    if (isLoading) {
      return <li>Is Loading..</li>;
    }
    if (todo) {
      return (
        <div>
          <div>
            <h2>Task number {todo.id}</h2>
          </div>
          <div>
            <h3>{todo.todo}</h3>
          </div>
          <div>
            userId:
            {todo.userId}
          </div>
          <div>{todo.completed ? "Completed" : "Not Completed"}</div>
        </div>
      );
    } else if (!isLoading) {
      return <NotFound />;
    }
  }, [todo, isLoading]);

  return <>{showTodo}</>;
};
