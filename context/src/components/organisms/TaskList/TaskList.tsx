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

export const TaskListPath: string = "tasklist";

export const TaskList = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>([]);
  const [tot, setTot] = useState<number | undefined>(0);
  const [isLoading, setIsLoading] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const defaultPageSize = 30;

  //qui gestisco il numero della query per il limit e per lo skip
  //per searchParam se arriva skip fai altrimenti non mettere nulla
  const skip = searchParams.get("skip") || 0;
  //se ha un valore usa limit, se non lo ha usa 30
  const limit = searchParams.get("limit") ?? `${defaultPageSize}`;
  const limitNum = Number(limit);
  //se limitnum è NaN è falso poiché non è associabile, od il numero è negativo, metti 30
  const urlPageSize = limitNum > 0 ? limitNum : defaultPageSize;
  const [pageSize, setPageSize] = useState(urlPageSize);
  const [pageSizeForLinks, setPageSizeForLinks] = useState(pageSize);

  //componente per fare l'impaginazione dividendo per pagine gli elementi(nota: promise->limit,total,skip)
  const pagination = useMemo(() => {
    //costante non è l'array in sé ma il puntatore, è ciò che c'è dentro che cambia non la sua posizione nella memoria
    const pagination: JSX.Element[] = [];
    if (!pageSizeForLinks) {
      return pagination;
    }
    let pages = Math.ceil((tot ? tot : 0) / pageSizeForLinks);
    for (let index = 0; index < pages; index++) {
      const space = index < pages - 1 ? " - " : "";
      pagination.push(
        <span key={index}>
          <Link
            to={`/${TaskListPath}?skip=${
              index * pageSizeForLinks
            }&limit=${pageSizeForLinks}`}
          >
            {index + 1}
          </Link>
          {space}
        </span>
      );
    }
    return pagination;
  }, [tot, skip, pageSizeForLinks]);

  useEffect(() => {
    getTodos();
  }, [skip]);

  //più formale
  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [todos, isLoading]);

  //scateno in modo asincrono
  const getTodos = async () => {
    setIsLoading(true);
    setPageSizeForLinks(pageSize);
    const response = await todosList(Number(skip), pageSize);
    //se presente response restituisci i todos
    setTodos(response?.todos);
    setTot(response?.total);
  };

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

  return (
    <>
      <div>
        <div>
          {pagination} Tot: {tot}
        </div>
        <span>Page size: </span>
        <input
          type={"number"}
          min={1}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        ></input>
        <button
          onClick={() => {
            getTodos();
          }}
        >
          Refresh List
        </button>
        <ul>{showTodos}</ul>
      </div>
    </>
  );
};
