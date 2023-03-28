import logo from "./logo.svg";
import "./App.css";
import { TitleList, LabelWithInput, CheckList } from "components";
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
  const [showList, setShowList] = useState<boolean>(true);
  const [checkRow, setCheckRow] = useState<string[]>([
    "Check 1",
    "Check 2",
    "Check 3",
    "Check 4",
    "Check 5",
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <p>My awesome checklist</p>

        <button onClick={() => setShowList((x) => !x)}>
          {showList ? "Hide" : "Show"} list
        </button>

        {showList && <CheckList list={checkRow} setCheckRow={setCheckRow} />}
      </header>
    </div>
  );
};

export default App;
