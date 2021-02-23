import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import {
  TitleContainer,
  SmallContainer,
  BadgeContainer,
} from "../../ui/containers/index";
import BadgeBG from "../../ui/badges/BadgeBg";
import Button from "../../ui/button/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { art, heart, explore } from "../../assets/index";

const useStyles = makeStyles(theme => ({
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
    height: "100%",
    width: "fit-content",
    minWidth: "fit-content",
    maxWidth: "fit-content",
    flex: 1,
    padding: ".4em .4em",
    backgroundColor: "lightgrey",
    color: "black",
    fontFamily: "'Mitr', sans-serif",
    fontSize: "clamp(7px, 1.75rem, 4vmin)",
    "& p:nth-child(1)": {},
    "& p:nth-child(2)": {},
  },
  middle: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "baseline",
    marginLeft: "4em",
    "& span": {
      display: "flex",
      "& p:nth-child(2)": {
        fontFamily: `'Roboto', sans-serif`,
        fontWeight: "300",
      },
    },
  },
  right: {
    flex: .7,
  },
  start: {
    // marginRight: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'gold',
    color: "#575757",
    height: '5em',
    width: '5em',
    borderRadius: '50%',
    willChange: 'transform',
    cursor: 'pointer',
    transition: 'transform ease .3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }
}));

const convertDate = date => {
  let stringDate = new Date(date).getUTCDate();
  let stringDay = new Date(date).getUTCDay();
  stringDay =
    stringDay === 0
      ? "Monday"
      : stringDay === 1
      ? "Tuesday"
      : stringDay === 2
      ? "Wednesday"
      : stringDay === 3
      ? "Thursday"
      : stringDay === 4
      ? "Friday"
      : stringDay === 5
      ? "Saturday"
      : "Sunday";
  return { stringDate, stringDay };
};

// it's strange, had to pull props out of props??
const Mission = ({
  props: {
    attributes: { name, due_date, user_id, created_at, updated_at },
  },
}) => {
  const [state, dispatch] = useContext(AppContext);

  const {
    theme: { colors },
  } = state;
  const classes = useStyles(state.theme.colors);
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
          <span>
            <p style={{ marginRight: ".5em" }}>Mission:</p>
            <p>{name}</p>
          </span>
          <BadgeBG>
            <BadgeContainer>{art}</BadgeContainer>
            <BadgeContainer>{heart}</BadgeContainer>
            <BadgeContainer>{explore}</BadgeContainer>
          </BadgeBG>
        </div>
        <div className={classes.right}>
          <div className={classes.start}>
            <h4 style={{margin: 0}}>START</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
