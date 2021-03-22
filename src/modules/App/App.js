import React, { useEffect, useReducer, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AppContext from "./AppContext";
import { appReducer, initialState } from "../common/appReducer";
import Welcome from "../views/Welcome";
import MissionControl from "../views/MissionControl";
import DailyMission from "../views/DailyMission";
import TaskView from "../views/TaskView";
import ParentView from "../views/ParentView";
import RewardStore from "../views/RewardStore";
import Error400 from "../common/error/Error400";
import Error500 from "../common/error/Error500";
import AppContainer from "../../ui/containers/AppContainer";
import { getAllMissions, getAllTasks } from "../common/apiCalls";
import AccountsView from "../views/AccountsView";
// import {useAuth0} from '@auth0/auth0-react'

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [error, setError] = useState(null);
  // const { isAuthenticated } = useAuth0()

  useEffect(async () => {
    await getAllMissions()
      .then((data) => addDataToState("missions", data.data))
      .catch((error) => setError(error));
  }, []);

  useEffect(async () => {
    await getAllTasks()
      .then((data) => addDataToState("tasks", data.data))
      .catch((error) => setError(error));
  }, []);

  // useEffect(() => {
  //   console.log('app effect')
  //   return !isAuthenticated ?
  //   <Redirect to="/" /> :
  //   <Redirect to="/accounts" />
  // }, [])

  const addDataToState = (type, data) => {
    const action = { type: `FETCH_${type.toUpperCase()}`, [type]: data };
    dispatch(action);
  };

  return (
    <>
      {!error ? (
        <AppContext.Provider value={[state, dispatch]}>
          <AppContainer />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route
              exact
              path="/daily-mission/:id"
              render={({ match }) => {
                const id = +match.params.id;
                return <DailyMission id={id} />;
              }}
            />
            <Route
              exact
              path="/task/:id"
              render={({ match }) => {
                const id = +match.params.id;
                return <TaskView id={id} />;
              }}
            />
            <Route
              exact
              path="/mission-control/:id"
              render={({ match }) => {
                const id = +match.params.id;
                return <MissionControl id={id} />;
              }}
            />
            <Route
              exact
              path="/rewards/:id"
              render={({ match }) => {
                const id = +match.params.id;
                return <RewardStore id={id} />;
              }}
            />
            <Route exact path="/parent-view" component={ParentView} />
            <Route exact path="/accounts" component={AccountsView} />
            <Route path="/" component={Error400} />
          </Switch>
        </AppContext.Provider>
      ) : (
        <Error500 />
      )}
    </>
  );
};

export default React.memo(App);
