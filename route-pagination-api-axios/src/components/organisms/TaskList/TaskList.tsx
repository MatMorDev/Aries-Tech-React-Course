import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { todosList } from "../../../api";
import { Todo } from "types";

export const TaskList = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const [tot, setTot] = useState<number | undefined>(0);
  const pageSize = 30;

  //per searchParam se arriva skip fai altrimenti non mettere nulla
  let skip = searchParams.get("skip" || 0);

  //scateno in modo asincrono
  const getTodos = async () => {
    setIsLoading(true);
    const response = await todosList(Number(skip));
    //se presente response restituisci i todos
    setTodos(response?.todos);
    setTot(response?.total);
  };

  //componente per fare l'impaginazione dividendo per pagine gli elementi(nota: promise->limit,total,skip)
  const pagination = useMemo(() => {
    let pages = Math.ceil((tot ? tot : 0) / pageSize);
    let pagination = [];
    for (let index = 0; index < pages; index++) {
      const space = index < pages - 1 ? " - " : "";
      pagination.push(
        <span key={index}>
          <Link to={`/tasklist?skip=${index * pageSize}`} key={index}>
            {index + 1}
          </Link>
          {space}
        </span>
      );
    }
    return pagination;
  }, [tot, skip]);

  //memo per visualizzare i task
  const showTodos = useMemo(() => {
    if (isLoading) {
      return <li>Is Loading..</li>;
    }
    //al primo reinderizzamento verifico che ci sia(esiste ed ho almeno un elemento) -- formalmente corretto
    if (todos && todos.length) {
      return todos.map((todo: Todo) => {
        return (
          <li key={todo.id}>
            <Link
              to={`/taskdetail/${todo.id}`}
              style={{ color: todo.completed ? "green" : "red" }}
            >
              <span style={{ color: "black", fontWeight: "bold" }}>
                {todo.id} -
              </span>
              {todo.todo}
            </Link>
          </li>
        );
      });
    } else {
      return <li>There is no list</li>;
    }
    //la memo si scatena solo quando cambia il todos
  }, [todos, isLoading]);

  useEffect(() => {
    getTodos();
  }, [skip]);

  //più formale
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [todos, isLoading]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            getTodos();
          }}
        >
          Refresh List
        </button>
        <div> Tot: {tot}</div>
        <div>{pagination}</div>
        <ul>{showTodos}</ul>
      </div>
    </>
  );
};
