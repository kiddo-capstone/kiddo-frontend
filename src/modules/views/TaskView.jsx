import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import {
  PageContainer,
  TitleContainer,
  SmallContainer,
  MediumContainer,
} from "../../ui/containers/index";
import { getTaskById } from "../common/apiCalls";

const useStyles = makeStyles(theme => ({
  innerContainer: {
    'h1, h2, h3, h4, p': {
      margin: 0,
    },
  },
}));

const TaskView = ({ id }) => {
  const [state, dispatch] = useContext(AppContext);
  const [error, setError] = useState(null);
  const classes = useStyles();
  const {selectedTask: { attributes }} = state;

  useEffect(async () => {
    await getTaskById(id)
      .then(data => addTaskToState("selectedTask", data.data))
      .catch(error => setError(error));
  }, []);

  const addTaskToState = (type, data) => {
    const action = { type: `FETCH_SELECTED_TASK`, selectedTask: data };
    dispatch(action);
  };

  // rendering different text than previous click BC switch from
  // canned data over to fetching the task in the DB by ID which has old copy
  return (
    <PageContainer>
      <div className={classes.innerContainer}>
        <TitleContainer style={{ width: "100%" }}>
          <p>Agent Task:</p>
          <h1>{attributes?.name}</h1>
        </TitleContainer>
      </div>
    </PageContainer>
  );
};

export default TaskView;
