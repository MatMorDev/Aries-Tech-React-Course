import {
    Routes,
    Route,
    Outlet,
    Link,
    useSearchParams,
    useParams,
  } from "react-router-dom";
import { NotFound } from "../NotFound/NotFound";

export const TaskDetail = () => {

    let { id } = useParams<"id">();

    if (!id) {
      return <NotFound />;
    }

    return <>
    <div>Task number {id} Detail:</div>
   </>
}