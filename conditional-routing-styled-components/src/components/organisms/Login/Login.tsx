import { loginCall } from "api/loginCall";
import { useContext, useMemo, useState } from "react";
import { useNavigate, redirect } from "react-router-dom";
import { LocalStorageUserKey } from "_shared/constants";
import { AuthContext } from "_shared/contexts";
import {
  RemoveFromLocalStorage,
  SaveToLocalStorage,
} from "_shared/helpers/localStorageFunctions";

export const LoginPath = "login";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState<boolean>(false);
  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  //   const doLogin = useMemo(() => {
  //     return () => {
  //       loginCall(username, password);
  //     };
  //   }, [username, password]);

  const doLoginFunction = async (user: string, pass: string) => {
    const response = await loginCall(user, pass);
    setUser(response);
    //invalid login
    if (!response) {
      setInvalidLogin(true);
      RemoveFromLocalStorage(LocalStorageUserKey);
      //termina qui
      return;
    }
    SaveToLocalStorage(LocalStorageUserKey, response);
    navigate("/");
    //redirect("/");
  };

  //username: 'kminchelle'
  //password: '0lelplR'

  return (
    <div>
      {invalidLogin && <h3>Login non valida</h3>}

      <input
        type={"text"}
        placeholder={"Username"}
        value={username}
        onChange={(e) => {
          setInvalidLogin(false);
          setUsername(e.target.value);
        }}
      />
      <input
        type={"password"}
        placeholder={"Password"}
        value={password}
        onChange={(e) => {
          setInvalidLogin(false);
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          //   doLogin();
          doLoginFunction(username, password);
        }}
      >
        Login
      </button>
    </div>
  );
};
