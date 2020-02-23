import React, { useState } from "react";
import "./App.css";
import "./MyForm";
import MyForm from "./MyForm";
import { StateProvider } from "./store";

function App() {
  let [myFormFieldValue, setTheDefaultValue] = useState("");
  const { Provider } = theContext;
  const modifyValue = newValue => {
    setTheDefaultValue(newValue);
  };
  return (
    <div className="App">
      <StateProvider>
        <header className="App-header">
          <MyForm />
        </header>
      </StateProvider>
    </div>
  );
}

export default App;
