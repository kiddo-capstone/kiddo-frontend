import React, { useReducer, useState } from "react";
import AppContext from "./AppContext";
import { appReducer } from "../../common/modules/appReducer";
import "./App.css";
import MissionControl from "../MissionControl/MissionControl";

// App Setup
const initialState = {
  missions: ["mission"],
  user: { name: "scott" },
};

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
