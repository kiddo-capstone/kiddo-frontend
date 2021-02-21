import React, { useReducer, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialState } from "../common/appReducer";
import "./App.css";
import MissionControl from "../views/MissionControl";
import StyleSample from "../views/StyleSample";
import Button from '../../ui/button/Button';
import DailyMission from "../views/DailyMission";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [show, setShow] = useState(true)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <main className="App">
        <Switch>
          <Route
            exact 
            path='/agent-dashboard'
            render={() => 
              <MissionControl />
            }
          />
          <Route
            exact
            path='/daily-mission'
            render={() =>
              <DailyMission />
            }
          />
        </Switch>
        <Button onClick={() => setShow(!show)}>{show ? "Hide Style Guide" : "Show Style Guide"}</Button>
        {show && <StyleSample />}
      </main>
    </AppContext.Provider>
  );
}

export default App;
