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
    transition: 'transform ease .2s',
    willChange: 'transform',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-.3em)'
    },
  },
  category: {
    // flexDirection: 'column',
    display: "flex",
    width: 'fit-content',
    transform: 'translate(.6em, 1.7em)',
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
  },
  left: {
    height: "100%",
    width: "fit-content",
    minWidth: "fit-content",
    maxWidth: "fit-content",
    flex: 1,
    padding: ".4em .4em",
    backgroundColor: "lightgrey",
    color: "#282C34",
    fontFamily: "'Mitr', sans-serif",
    fontSize: "clamp(7px, 1.75rem, 4vmin)",
    "& p:nth-child(1)": {},
    "& p:nth-child(2)": {},
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
  right: {
    flex: 0.7,
  },
  start: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "gold",
    color: "#575757",
    height: "5em",
    width: "5em",
    borderRadius: "50%",
    willChange: "transform",
    cursor: "pointer",
    transition: "transform ease .3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
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
