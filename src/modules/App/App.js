import React, { useReducer, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialState } from "../common/appReducer";
import "./App.css";
import MissionControl from "../views/MissionControl";
import StyleSample from "../views/StyleSample";
import Button from '../../ui/button/Button'

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [show, setShow] = useState(true)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <div className="App">
        <Button onClick={() => setShow(!show)}>{show ? "Hide Style Guide" : "Show Style Guide"}</Button>
        {show && <StyleSample />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
