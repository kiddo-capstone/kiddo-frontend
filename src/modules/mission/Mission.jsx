import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import { BadgeContainer } from "../../ui/containers/index";
import BadgeBG from "../../ui/badges/BadgeBg";
import RoundButton from "../../ui/button/RoundButton";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { art, heart, explore } from "../../assets/index";
import { convertDate } from "../common/convertDate";

const useStyles = makeStyles(theme => ({
  missionWrapper: {
    margin: ".5em 0",
    width: "90%",
    height: "fit-content",
    width: "100%",
  },
  mission: {
    height: '6em',
    padding: '0',
    paddingRight: '1%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3e4452",
    textAlign: "center",
    borderRadius: "5px",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
    border: "solid 4px lightgrey",
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: "100%",
    flex: .7,
    backgroundColor: "lightgrey",
    color: "#282C34",
    fontFamily: "'Mitr', sans-serif",
    fontSize: "clamp(7px, 1.75rem, 4vmin)",
    "& p:nth-child(1)": {
      fontSize: "clamp(5px, .6em, 50px)",
    },
    "& p:nth-child(2)": {
      fontSize: "clamp(5px, 1em, 50px)",
    },
  },
  middle: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '3% 0',
    "& span": {
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      "& p": {
        margin: 0,
      },
      // "& p:nth-child(1)": {
      //   fontSize: 'clamp(10px,.5em,.7em)',
      //   // textDecoration: 'underline',
      //   color: 'gold',
      //   fontWeight: "light",
      //   fontFamily: `'Roboto', sans-serif`,
      // },
      "& p:nth-child(1)": {
        fontSize: "clamp(5px, 1.5em, 50px)",
        fontFamily: `'Russo One', sans-serif`,
        fontWeight: "900",
      },
    },
  },
  right: {
    flex: 0.7,
    width: "100%",
    justifyContent: 'center',
    display: 'flex',
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

// it's strange, had to pull props out of props??
const Mission = props => {
  const [state, dispatch] = useContext(AppContext);

  const {
    props: {
      attributes: { name, due_date, user_id, created_at, updated_at },
    },
  } = props;
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
            {/* <p>Mission</p> */}
            <p>{name}</p>
          </span>
          <BadgeBG>
            <BadgeContainer>{art}</BadgeContainer>
            <BadgeContainer>{art}</BadgeContainer>
            <BadgeContainer>{art}</BadgeContainer>
          </BadgeBG>
        </div>
        <div className={classes.right}>
          <Link
            to={`/daily-mission/${props.props.id}`}
            style={{ textDecoration: "none" }}>
            <RoundButton>START</RoundButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Mission);
