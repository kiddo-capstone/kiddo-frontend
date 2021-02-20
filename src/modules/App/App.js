import React, { useReducer, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialState } from "../common/appReducer";
import "./App.css";
import MissionControl from "../views/MissionControl";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="App">
        <h1 className="App-logo">🕵️</h1>
        <p>Welcome to KidDo</p>
        <MissionControl />
      </div>
    </AppContext.Provider>
  );
}

export default App;
