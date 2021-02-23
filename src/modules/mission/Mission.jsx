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
    borderRadius: "5px",
    height: "100%",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
  },
  left: {
    height: '100%',
    width: 'fit-content',
    minWidth: 'fit-content',
    maxWidth: 'fit-content',
    flex: 1,
    padding: '.4em .4em',
    backgroundColor: 'lightgrey',
    color: 'black',
    fontFamily: "'Mitr', sans-serif",
    fontSize: "clamp(7px, 1.75rem, 4vmin)",
    '& p:nth-child(1)': {
    },
    '& p:nth-child(2)': {
    },
  },
  middle: {
    flex: 2,
  },
  right: {
    flex: 1,
  },
}));

const convertDate = (date) => {
  let stringDate = new Date(date).getUTCDate();
  let stringDay = new Date(date).getUTCDay();
  stringDay = stringDay === 0 ? 'Monday'
    : stringDay === 1 ? 'Tuesday'
    : stringDay === 2 ? 'Wednesday'
    : stringDay === 3 ? 'Thursday'
    : stringDay === 4 ? 'Friday'
    : stringDay === 5 ? 'Saturday'
    : 'Sunday'
  return {stringDate, stringDay}
}

const Mission = ({ props }) => {
  const [state, dispatch] = useContext(AppContext);
  const classes = useStyles(state.theme.colors);
  const { attributes } = props;
  const { name, due_date, user_id, created_at, updated_at } = attributes;

  const assignedDate = convertDate(created_at).stringDate;
  const assignedDay = convertDate(created_at).stringDay;

  return (
    <div className={classes.missionWrapper}>
      <div className={classes.mission}>
        <div className={classes.left}>
          <p>{assignedDay}</p>
          <p>{assignedDate}</p>
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
