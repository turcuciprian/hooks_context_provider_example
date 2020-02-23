import React from "react";
import "./App.css";
import "./MyForm";
import MyForm from "./MyForm";
import { StateProvider } from "./store";

function App() {
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
