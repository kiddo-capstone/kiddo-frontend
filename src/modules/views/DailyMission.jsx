import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import { getMissionById, getTasksByMissionId } from "../common/apiCalls";

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
    .catch(error => setError(error))
    .then(getMissionTasks(id))
  }, [state.selectedMissionTasks]);
  
  const getMissionTasks = async (id) => {
    await getTasksByMissionId(id)
      .then(data => addDataToState("selectedMissionTasks", data.data))
      .catch(error => setError(error))
  };

  const addDataToState = (type, data) => {
    const action = { type: `FETCH_${type.toUpperCase()}`, [type]: data };
    dispatch(action);
  };

  const makeTasksList = () => {
    const missionTasks = state.selectedMissionTasks
    return missionTasks?.map(task => {
      return <Task key={task.id} props={task} />;
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
        {makeTasksList()}
      </section>
    </PageContainer>
  );
};

export default React.memo(DailyMission);
