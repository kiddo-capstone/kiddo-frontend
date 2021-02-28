import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { getMissionById } from "../common/apiCalls";
import { cannedData } from "../../cannedData";
import {getTasksByMissionId} from '../common/apiCalls'

import Task from "../task/Task";
import PageContainer from "../../ui/containers/PageContainer";
import TitleContainer from "../../ui/containers/TitleContainer";
import AccentLine from '../../ui/decorative/AccentLine'

const useStyles = makeStyles(theme => ({
  tasks: {
    justifyContent: "space-between",
    height: "90%",
    minWidth: "750px",
    width: "90%",
    textAlign: "center",
    borderRadius: "5px",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    // backgroundColor: "#282c34",
    [theme.breakpoints.down("600")]: {
      minWidth: "20px",
    },
  },
  line: {
    height: 5,
    backgroundColor: "cyan",
    width: "-webkit-fill-available",
    transform: "translateY(-2.8em)",
    zIndex: 0,
  },
}));

const DailyMission = props => {
  const [state, dispatch] = useContext(AppContext);
  const [error, setError] = useState(null);
  const { id } = props;
  const {selectedMission: { attributes }} = state;
  const classes = useStyles();

  useEffect(async () => {
    await getMissionById(id)
      .then(data => addDataToState("selectedMission", data.data))
      .catch(error => setError(error));
      //   NEED TO HOOK UP WITH BACKEND
      //   await getTasksByMissionId(id)
      //     .then(data => addDataToState('selectedMissionTasks', data.data))
      //     .catch(error => setError(error))
  }, []);

  const addDataToState = (type, data) => {
    const action = { type: `FETCH_${type.toUpperCase()}`, selectedMission: data };
    dispatch(action);
  };

  const makeTasksList = () => {
    // swap canned data for real data in state w/BE link up (selected mission tasks)
    return cannedData.data.map(task => {
      return (
        <Link
          key={task.id}
          to={`/task/${task.id}`}
          style={{ textDecoration: "none", width: 'inherit', display: 'flex', justifyContent: 'center' }}>
          <Task key={task.id} props={task} />
        </Link>
      );
    });
  };

  return (
    <PageContainer>
      <TitleContainer style={{ width: "100%" }}>
        <p>Your mission:</p>
        <h1>{attributes?.name}</h1>
      </TitleContainer>
      <AccentLine color={state.theme.colors.purple}/>
      <section className={classes.tasks}>
        {/* hardcoded canned data for tasks imported into file */}
        {makeTasksList()}
      </section>
    </PageContainer>
  );
};

export default React.memo(DailyMission);
