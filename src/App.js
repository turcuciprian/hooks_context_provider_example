import React, { useState } from "react";
import "./App.css";
import "./MyForm";
import MyForm from "./MyForm";
import theContext from "./theContext";

function App() {
  let [myFieldValue, setMyFieldValue] = useState("");
  const { Provider } = theContext;
  return (
    <div className="App">
      <Provider value={{ myFieldValue, setMyFieldValue }}>
        <header className="App-header">
          <MyForm />
        </header>
      </Provider>
    </div>
  );
}

export default App;
