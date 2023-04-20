import { Link, useNavigate } from "react-router-dom";
import { ContextTestPath } from "components/organisms/ContextText";
import { TaskListPath } from "../TaskList/TaskList";
import { RemoveFromLocalStorage } from "_shared/helpers/localStorageFunctions";
import { LocalStorageUserKey } from "_shared/constants";
import { useContext } from "react";
import { AuthContext } from "_shared/contexts";
import { LoginPath } from "../Login";
import { UserBar } from "../UserBar/UserBar";
import { StyledButton } from "components/atoms/StyledButton";

export const Header = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  //tolgo l'utente sia dal useContext che dal localStorage
  const logout = () => {
    setUser(undefined);
    RemoveFromLocalStorage(LocalStorageUserKey);
    navigate(LoginPath);
  };

  return (
    <div className={"Header"}>
      <Link to="/">Home</Link> | <Link to={`/${TaskListPath}`}>Tasks</Link> |{" "}
      <Link to={`/${ContextTestPath}`}>Context Test</Link>|{" "}
      <StyledButton borderSize={5} text="Logout" callback={logout} />
      <button onClick={() => logout()}>Logout</button>
      <UserBar />
    </div>
  );
};
