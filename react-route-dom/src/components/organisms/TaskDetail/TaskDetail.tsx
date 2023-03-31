import {
  Routes,
  Route,
  Outlet,
  Link,
  useSearchParams,
  useParams,
  useLocation,
} from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const TaskDetail = () => {
  let { id } = useParams<"id">();

  const location = useLocation();
  const { userId, todo, completed } = location.state;

  if (!id) {
    return <NotFound />;
  }

  const handleCompleted = () => {
    //TO DO
    // callBackCompleted=>App
    // change completed state in id todoList
    // set newTodoList
    console.log("completed now " + id);
  };

  return (
    <>
      <div>Task number {id} Detail:</div>
      <div>User number: {userId}</div>
      <div>Task: {todo}</div>
      <div>Completed: {completed ? "completed" : "not completed"}</div>
      {completed ? (
        <></>
      ) : (
        <button onClick={() => handleCompleted()}>Complete</button>
      )}
    </>
  );
};
