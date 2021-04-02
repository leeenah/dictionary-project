import "./App.css";
import Search from "./Search";
import Result from "./Result";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  function updateResult(result) {
    console.log(result);
    setResult(result);
  }

  return (
    <div className="App">
      <div className="container">
        <h1> Dictionary </h1>

        <Search updateResult={updateResult} />
        <Result result={result} />
        {/* created a result component, which has a props called 'result'. This props passes down 'whatever value' in App's state results  */}
      </div>
    </div>
  );
}

export default App;
