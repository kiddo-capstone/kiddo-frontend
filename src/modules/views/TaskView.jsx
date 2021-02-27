import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import Journal from '../tasks/Journal'
import ImageCapture from "../tasks/ImageCapture";
import AccentLine from "../../ui/decorative/AccentLine";
import Button from "../../ui/button/Button";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { getTaskById } from "../common/apiCalls";
import { missionTasks } from "../../cannedData";

const useStyles = makeStyles(theme => ({
  innerContainer: {
    width: "100%",
    display: "flex",
    padding: "0em 2em",
    flexWrap: 'wrap',
    "& h1, h2, h3, h4, p": {
      margin: 0,
    },
  },
  descriptionContainer: {
    border: "solid 3px hotpink",
    borderRadius: "10px",
    fontFamily: "monospace",
    padding: "1em 1em",
    minWidth: '350px',
    height: '12em',
    overflow: 'auto',
    // color: 'blanchedalmond',
  },
  actionContainer: {
    border: "solid 3px hotpink",
    // paddingTop: "1em",
    borderRadius: "10px",
    fontFamily: "monospace",
    minWidth: '350px',
    // height: '100%',
  },
  category: {
    display: "flex",
    width: "100%",
    alignContent: "baseline",
    zIndex: 1,
    "& p": {
      color: "gold",
      margin: 0,
      marginRight: ".4em",
    },
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const TaskView = ({ id }) => {
  const [state, dispatch] = useContext(AppContext);
  const [complete, setComplete] = useState(false);
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

  const checkReady = (trueFalse) => {
    console.log(trueFalse);
    if (complete !== trueFalse) {
      setComplete(trueFalse)
    }
  }

  const handleClick = () => {
    console.log('handled')
    // update the needed glags 
  }

  return (
    // FYI
    // rendering different text than previous click BC switch from
    // canned data over to fetching the task in the DB by ID which has old copy

    <PageContainer>
      <TitleContainer style={{ width: "100%" }}>
        <p>Agent Task:</p>
        <h1>{attributes?.name}</h1>
      </TitleContainer>
      <AccentLine color={"hotpink"} />
      <section className={classes.innerContainer}>
        <section className={classes.left}>
          <span className={classes.category}>
            <p>{attributes?.category}</p>
            <p>💰 X {attributes?.points}</p>
          </span>
          <div className={classes.descriptionContainer}>
            <p>
              {attributes?.description} and here is some more placeholder text,
              combined with a handful of model sentence structures, to generate
              Lorem Ipsum which looks reasonable.
            </p>
          </div>
        </section>
        <div style={{ width: "1%" }} />
        <section className={classes.right}>
          <span className={classes.category} style={{opacity: 0}}>
            <p>.</p>
          </span>
          <div className={classes.actionContainer}>
            {/* {attributes.photoIsRequired === true && <ImageCapture />} */}
            <Journal checkReady={checkReady}/>
          </div>
          <div className={classes.actionContainer}>
            <ImageCapture />
          </div>
        </section>
      </section>
      <Button onClick={handleClick} color="hotpink" disabled={complete ? false : true}>
        {complete ? 'All Done!' : 'Complete Task to Submit'}
      </Button>
    </PageContainer>
  );
};

export default React.memo(TaskView);
