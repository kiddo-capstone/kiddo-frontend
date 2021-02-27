import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  taskWrapper: {
    marginBottom: ".2em",
    width: "90%",
    height: "fit-content",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    transition: "ease .3s",
    willChange: "transform",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-.3em)",
      "& $task": {
        transition:
          "border ease 2s, background-color 1s, color 1s, box-shadow 1.5s",
        backgroundColor: "#ffdb00",
        border: "solid 4px gold",
        color: 'black',
        boxShadow: '0 0 20px 15px gold',
      },
      '& $category': {
        '& p': {
          color: 'black !important',
        },

        // opacity: 0,
      },
    },
  },
  category: {
    display: "flex",
    width: 'fit-content',
    transform: 'translate(.6em, 1.7em)',
    zIndex: 1,
    transition: 'ease .3s',
    '& p': {
      willChange: 'color',
      transition: 'color .35s',
      color: 'gold',
      margin: 0,
      marginRight: ".4em",
    },
  },
  task: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "solid 4px lightgrey",
    borderRadius: "5px",
    backgroundColor: "#3e445296",
    // backgroundColor: "#3e4452",
    // backgroundColor: "#7367f07a;",
    textAlign: "center",
    height: "100%",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
    border: "solid 4px lightgrey",
    padding: "1.5em",
    transition: "ease .3s",
  },
  titleContainer: {
    marginTop: 1,
    display: "flex",
  },
  taskText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    display: "flex",
    "& h1": {
      fontWeight: "100",
      lineHeight: "1",
      margin: 0,
    },
    "& p": {
      fontFamily: `'Roboto', sans-serif`,
      fontWeight: "300",
      margin: 0,
    },
  },
  taskDescription: {
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "1rem",
  },
}));

const Task = ({ props }) => {
  const classes = useStyles();
  const {
    attributes: { name, description, category, points, photoIsRequired },
  } = props;

  return (
    <article className={classes.taskWrapper}>
      <span className={classes.category}>
        <p>{category}</p>
        {/* add a coin graphic here */}
        <p>💰 X {points}</p>
      </span>
      <div className={classes.task}>
        <div className={classes.titleContainer}>
          <span className={classes.taskText}>
            <h1 style={{ marginRight: ".5em" }}>Agent Task</h1>
            <p>{name}</p>
          </span>
        </div>
        <p className={classes.taskDescription}>{description}</p>
      </div>
    </article>
  );
};

export default React.memo(Task);
