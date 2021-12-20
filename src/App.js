import "./App.css";
import { useState } from "react";

function App() {
  const [value, getvalue] = useState("Welcome...");
  const handleChange = (e) => {
    getvalue(e.target.value);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="input">
          <h3>Input</h3>
          <textarea
            className="input-text"
            onChange={handleChange}
            defaultValue={value}
          />
        </div>
        <div className="output">
          <h3>Pro Note</h3>
          <div className="output-text">{value}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
