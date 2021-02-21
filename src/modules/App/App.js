import React, { useReducer, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialState } from "../common/appReducer";
import MissionControl from "../views/MissionControl";
import StyleSample from "../views/StyleSample";
import DailyMission from "../views/DailyMission";
import Sidebar from "../common/sidebar/Sidebar";
import Header from "../common/header/Header";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/agent-dashboard" component={MissionControl}/>
        <Route path="/daily-mission" component={DailyMission} />
        <Route path="/style-guide" component={StyleSample} />
        <Route path="/mission-control" component={MissionControl} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
