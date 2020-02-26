import React, { useState } from "react";
import "./App.css";
import MyForm from "./MyForm";
import ComponentB from "./ComponentB";
import theContext from "./theContext";

function App() {
  let [myFieldValue, setMyFieldValue] = useState("");
  const { Provider } = theContext;
  return (
    <div className="App">
      <Provider value={{ myFieldValue, setMyFieldValue }}>
        <header className="App-header">
          <MyForm /><br/>
          <ComponentB />
        </header>
      </Provider>
    </div>
  );
}

export default App;
