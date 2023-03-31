import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
} from "react-router-dom";

export const TaskList = ({
  todoList = [{ id: 0, userId: 0, todo: "", completed: false }],
}) => {
  const tasksDetail = todoList.map((el) => {
    return (
      <li key={el.id}>
        <Link
          to={`/taskdetail/${el.id}`}
          state={{ userId: el.userId, todo: el.todo, completed: el.completed }}
        >
          Task {el.id}
        </Link>
      </li>
    );
  });

  return (
    <>
      <div>
        <ul>{tasksDetail}</ul>
      </div>
    </>
  );
};
