import { Link } from "react-router-dom";
import { ContextTestPath } from "components/organisms/ContextText";
import { TaskListPath } from "../TaskList/TaskList";

export const Header = () => {
  return (
    <div className={"Header"}>
      <Link to="/">Home</Link> | <Link to={`/${TaskListPath}`}>Tasks</Link> |{" "}
      <Link to={`/${ContextTestPath}`}>Context Test</Link>
    </div>
  );
};
