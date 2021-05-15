import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState("");
  const [result, setResult] = useState(null);

  const handleInput = (e) => {
    setInputData(e.target.value);
    const percentFullhd = Number(e.target.value) / 1920;
    console.log(inputData, percentFullhd);
    const resultHd = ((percentFullhd * 1366) / 10).toFixed(6);
    setResult(resultHd);
  };
  return (
    <div className="App">
      <div className="card">
        <div className="title">scale font size from 1920 to 1366</div>
        <input value={inputData} onChange={handleInput} type="text" />
        <div className="text">{result}</div>
      </div>
    </div>
  );
}

export default App;
