import React from "react";
import { makeStyles } from "@material-ui/core";
import AppContext from "../app/AppContext";
import { BadgeContainer } from "../../ui/containers/index";
import BadgeBG from "../../ui/badges/BadgeBg";
import RoundButton from "../../ui/button/RoundButton";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  taskWrapper: {
    marginBottom: ".2em",
    width: "90%",
    height: "fit-content",
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    transition: 'ease .3s',
    willChange: 'transform',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-.3em)',
      // filter: 'brightness(0.5)',
      '& $task': {
        transition: 'border ease 2s, background-color 1s, color 1s, box-shadow 1.5s',
        backgroundColor: "#ffdb00",
        border: "solid 4px gold",
        color: 'black',
        boxShadow: '0 0 20px 15px gold',
        // filter: 'blur(3px)',
        // backdropFilter: 'grayscale(1)',
      },
      '& $category': {
        opacity: 0,
      },
    },
  },
  category: {
    // flexDirection: 'column',
    display: "flex",
    width: 'fit-content',
    transform: 'translate(.6em, 1.7em)',
    transition: 'ease .3s',
    zIndex: 1,
    // willChange: 'transform',
    // willChange: 'filter',
    '& p': {
      color: 'gold',
      margin: 0,
      marginRight: '.4em',
    },
  },
  task: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#575757",
    textAlign: "center",
    borderRadius: "5px",
    height: "100%",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
    border: "solid 4px lightgrey",
    padding: '1em',
    transition: 'ease .3s',
    // willChange: 'transform',

  },
  titleContainer: {
    marginTop: 1,
    display: 'flex',
  },
  taskText: {
    // flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    // marginLeft: "4em",
    display: "flex",
    // alignItems: "baseline",
    "& h1": {
      fontWeight: "100",
      lineHeight: '1',
      margin: 0,
    },
    "& p": {
      fontFamily: `'Roboto', sans-serif`,
      fontWeight: "300",
      margin: 0,
    },
  },
  taskDescription: {
    fontFamily: 'Roboto',
    fontWeight: '300',
    fontSize: '1rem',
  },
}));

const Task = ({ props }) => {
  const classes = useStyles();
  const {
    attributes: { name, description, category, points },
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
