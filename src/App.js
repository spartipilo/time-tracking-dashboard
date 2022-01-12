import Report from "./components/Report";
import CardSubject from "./components/CardSubject";
import "./style/app.css";
import data from "./data.json";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const getValue = (val) => {
    setState(val);
  };
  return (
    <div className="principal-root">
      <div className="App">
        <div className="container__report">
          <Report getValue={getValue} />
        </div>
        <div className="cards-complete">
          {data.map((el, index) => (
            <CardSubject key={index} {...el} index={index} getValue={state} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
