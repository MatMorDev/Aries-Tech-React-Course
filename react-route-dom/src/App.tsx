import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {
  TaskList,
  MainBody,
  Home,
  NotFound,
  Header,
  TaskDetail,
} from "components/organisms";
import { getToDoList } from "./components/api";

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
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const result = await getToDoList();
      if (result.ok) {
        setTodoList(result.data.todos);
      } else {
        console.log(result.data);
      }
    };
    getList();
  }, []);
  console.log(todoList);
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
            <Route path="tasklist" element={<TaskList todoList={todoList} />} />
            <Route path="taskdetail/:id" element={<TaskDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
