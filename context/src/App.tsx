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
} from "components/organisms";
import { ContextTest, ContextTestPath } from "components/organisms/ContextText";

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

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <div id="main">
        <Routes>
          <Route path="/" element={<MainBody />}>
            <Route index element={<Home />} />
            <Route path={TaskListPath} element={<TaskList />} />
            <Route path={`${TaskDetailPath}/:id`} element={<TaskDetail />} />
            <Route path={ContextTestPath} element={<ContextTest />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
