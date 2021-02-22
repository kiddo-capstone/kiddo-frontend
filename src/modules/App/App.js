import React, { useReducer, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialState } from "../common/appReducer";
import MissionControl from "../views/MissionControl";
import StyleSample from "../views/StyleSample";
import DailyMission from "../views/DailyMission";
import Header from "../common/header/Header";
import Error400 from "../common/error/Error400";
import Error500 from "../common/error/Error500";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <ErrorBoundary FallbackComponent={Error500}>
      <AppContext.Provider value={[state, dispatch]}>
        <Header />
        {/* <Sidebar /> */}
        <Switch>
          <Route exact path="/daily-mission" component={DailyMission} />
          <Route exact path="/style-guide" component={StyleSample} />
          <Route exact path="/mission-control" component={MissionControl} />
          <Route exact path="/error-500" component={Error500} />
          <Route path="/" component={Error400} />
        </Switch>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
