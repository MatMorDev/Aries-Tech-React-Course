import logo from "./logo.svg";
import "./App.css";
import { TitleList, CheckItem, CheckRow, CheckList } from "components";
import { useState } from "react";

interface AppProps {
  title: string;
  description?: string;
  body?: {
    first: string;
    second?: string;
  };
}

export const App = ({ title, description, body }: AppProps) => {
  const [showList, setShowList] = useState(true);

  //all'interno del parametro callback passo una funzione integra
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>My awesome checklist</p>
        <button onClick={() => setShowList((x) => !x)}>
          {
            //toggle anche per scritta pulsante
            showList ? "Hide list" : "Hide list"
          }
        </button>
        {showList && (
          <CheckList list={["Check1", "Check2", "Check3", "Check4"]} />
        )}
      </header>
    </div>
  );
  //{showList && componente} si mostra solo se è true
};

export default App;
