import React, { useReducer, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialState } from "../common/appReducer";
import "./App.css";
import MissionControl from "../views/MissionControl";
import StyleSample from "../views/StyleSample";
import Button from '../../ui/button/Button';
import DailyMission from "../views/DailyMission";
import Sidebar from "../common/sidebar/Sidebar";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [show, setShow] = useState(true)

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <main className="App">
        <Sidebar />
        <div className='routes'>
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
            <Route
              exact
              path='/style-guide'
              render={() =>
                <>
                  <Button onClick={() => setShow(!show)}>{show ? "Hide Style Guide" : "Show Style Guide"}</Button>
                  {show && <StyleSample />}
                </>
              }
            />
          </Switch>
        </div>
      </main>
    </AppContext.Provider>
  );
}

export default App;
