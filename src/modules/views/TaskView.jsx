import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import {
  PageContainer,
  TitleContainer,
  SmallContainer,
  MediumContainer,
} from "../../ui/containers/index";
import AccentLine from "../../ui/decorative/AccentLine";
import { getTaskById } from "../common/apiCalls";

const useStyles = makeStyles(theme => ({
  innerContainer: {
    width: "100%",
    display: "flex",
    padding: "0em 2em",
    flexDirection: "column",
    "& h1, h2, h3, h4, p": {
      margin: 0,
    },
  },
  detailsContainer: {
    border: "solid 1px hotpink",
    borderRadius: "10px",
    fontFamily: "monospace",
    padding: "1em 1em",
    // paddingTop: '2em',
  },
  category: {
    display: "flex",
    width: "100%",
    // justifyContent: 'flex-start',
    alignContent: "baseline",
    // transform: 'translateX(-90%)',
    // transition: 'ease .3s',
    zIndex: 1,

    "& p": {
      color: "gold",
      margin: 0,
      marginRight: ".4em",
    },
  },
}));

const TaskView = ({ id }) => {
  const [state, dispatch] = useContext(AppContext);
  const [error, setError] = useState(null);
  const classes = useStyles();
  const {
    selectedTask: { attributes },
  } = state;

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
      <TitleContainer style={{ width: "100%" }}>
        <p>Agent Task:</p>
        <h1>{attributes?.name}</h1>
      </TitleContainer>
      <AccentLine color={"hotpink"} />
      <div className={classes.innerContainer}>
        <span className={classes.category}>
          <p>{attributes?.category}</p>
          <p>💰 X {attributes?.points}</p>
        </span>
        <div className={classes.detailsContainer}>
          <p>
            {attributes?.description} and here is some more placeholder text,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default TaskView;
