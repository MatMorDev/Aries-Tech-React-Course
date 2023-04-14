import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  TaskList,
  MainBody,
  Home,
  NotFound,
  Header,
  TaskDetail,
  TaskListPath,
  TaskDetailPath,
  LoginPath,
  Login,
} from "components/organisms";
import { ContextTest, ContextTestPath } from "components/organisms/ContextText";
import { AuthContext, AuthContextType } from "_shared/contexts";
import { LoginCallResponse } from "types/Response/LoginCallResponse";

interface AppProps {
  title: string;
  description?: string;
  body?: {
    first: string;
    second?: string;
  };
}

export const App = ({ title, description, body }: AppProps) => {
  const [showList, setShowList] = useState<boolean>(true);
  const [user, setUser] = useState<LoginCallResponse>();
  const authContextInitialValue: AuthContextType = { user, setUser };

  return (
    <AuthContext.Provider value={authContextInitialValue}>
      <div className="App">
        <Header />
        <header className="App-header">
          <h1>{title}</h1>
        </header>
        <div id="main">
          <Routes>
            <Route path={LoginPath} element={<Login />} />
            <Route path="/" element={<MainBody />}>
              <Route index element={<Home />} />
              <Route path={TaskListPath} element={<TaskList />} />
              <Route path={`${TaskDetailPath}/:id`} element={<TaskDetail />} />
              <Route
                path={ContextTestPath}
                element={
                  <>
                    <h1>ContextTest H1</h1>
                    <ContextTest />
                  </>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
