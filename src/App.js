import "./App.css";
import Search from "./Search";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  function updateResult(result) {
    setResult(result);
  }

  return (
    <div className="App">
      <div className="container">
        <h1> What word do you want to look up? </h1>

        <Search updateResult={updateResult} />
        {result !== null && <Result result={result} />}
        {/* created a Result component, which has a props called 'result'. 
        This props passes down 'whatever value' in App's state result  */}
      </div>
      <footer>
        coded by
        <a
          href="https://github.com/leeenah/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Lena Zhang
        </a>
      </footer>
    </div>
  );
}

export default App;
