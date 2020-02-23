import React, { useState } from "react";
import "./App.css";
import "./MyForm";
import MyForm from "./MyForm";
import theContext from "./theContext";

function App() {
  let [myFormFieldValue, setTheDefaultValue] = useState("");
  const { Provider } = theContext;
  const modifyValue = newValue => {
    setTheDefaultValue(newValue);
  };
  return (
    <div className="App">
      <Provider value={{ myFormFieldValue, modifyValue }}>
        <header className="App-header">
          <MyForm />
        </header>
      </Provider>
    </div>
  );
}

export default App;
