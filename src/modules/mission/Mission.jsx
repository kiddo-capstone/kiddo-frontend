import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import { TitleContainer, SmallContainer } from "../../ui/containers/index";
import Button from "../../ui/button/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(colors => ({
  missionWrapper: {
    margin: ".5em 0",
    width: "90%",
    height: "fit-content",
  },
  mission: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#575757",
    textAlign: "center",
    border: "solid .1px gold",
    borderRadius: "5px",
    height: "fit-content",
    padding: ".2em .2em",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
  left: {},
  middle: {},
  right: {},
}));

const Mission = ({ props }) => {
  const [state, dispatch] = useContext(AppContext);
  const classes = useStyles(state.theme.colors);
  const { attributes } = props;
  const { name, due_date, user_id, created_at, updated_at } = attributes;

  const assignedDate = new Date(created_at).getUTCDate();
  const assignedDay = new Date(created_at).getUTCDay();

  return (
    <div className={classes.missionWrapper}>
      <div className={classes.mission}>
        <div className={classes.left}>
          <p>assigned: {assignedDate}</p>
          <p>assigned: {assignedDay}</p>
        </div>
        <div className={classes.middle}>
          <p>{name}</p>
          <p>due: {due_date}</p>
        </div>
        <div className={classes.right}>
          <h4>START</h4>
        </div>
      </div>
    </div>
  );
};

export default Mission;
