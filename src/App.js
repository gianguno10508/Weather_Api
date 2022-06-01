import { useEffect, useState } from "react";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-5 text-left">
          <div className="col-left col-md-4">
            <Left />
          </div>
          <div className="col-right col-md-8">
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
