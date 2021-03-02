import React, { useContext } from "react";
import AppContext from "../App/AppContext";
import { BadgeContainer } from "../../ui/containers/index";
import BadgeBG from "../../ui/badges/BadgeBg";
import RoundButton from "../../ui/button/RoundButton";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import creativity from "../../assets/creativity.png";
import intelligence from "../../assets/intelligence.png";
import activity from "../../assets/activity.png";
import { convertDate } from "../common/convertDate";
import theme from "../../ui/common/theme";

const useStyles = makeStyles(theme => ({
  missionWrapper: {
    margin: ".5em 0",
    width: "90%",
    height: "fit-content",
  },
  mission: {
    height: "clamp(60px, 7em, 25vmin)",
    // minHeight: "6em",
    padding: "0",
    paddingRight: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    backgroundColor: "#3e445296",
    textAlign: "center",
    borderRadius: "5px",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
    border: "solid 4px lightgrey",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    flex: 0.6,
    backgroundColor: "lightgrey",
    color: "#3e4452",
    "& p:nth-child(1)": {
      fontSize: "clamp(7px, 1.75rem, 3.3vmin)",
      fontWeight: "100",
      margin: 0,
    },
    "& p:nth-child(2)": {
      margin: 0,
      fontSize: "clamp(5px, 1.4em, 50px)",
    },
    "& span": {
      fontSize: "clamp(7px, 1.75rem, 3.3vmin)",
      backgroundColor: "gold",
      marginRight: 4,
      margin: 0,
    },
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  },
  middle: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // margin: '3% 0',
    "& span": {
      display: "flex",
      flexDirection: "column",
      alignItems: "baseline",
      "& p": {
        margin: 0,
      },
      "& p:nth-child(1)": {
        fontSize: "clamp(5px, 1.5em, 5vmin)",
        fontFamily: `'Russo One', sans-serif`,
        fontWeight: "900",
      },
    },
  },
  right: {
    flex: 0.7,
    width: "100%",
    justifyContent: "center",
    display: "flex",
  },
  icon: {
    height: "1.5em",
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
      '& $icon': {
      
      }
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

  const classes = useStyles(theme.colors);

  const assignedDate = convertDate(created_at).stringDate;
  const assignedDay = convertDate(created_at).stringDay;

  return (
    <div className={classes.missionWrapper}>
      <div className={classes.mission}>
        <div className={classes.left}>
          <p>{assignedDay}</p>
          <p>{assignedDate}</p>
          <span className={classes.category}>
            <p>💰 X {(Math.random() * 100 + 1).toFixed(0)}</p>
          </span>
        </div>
        <div>
          {/* <p>Mission</p> */}
        </div>
        <div className={classes.middle}>
          <span className={classes.title}>
            {/* <p>Mission</p> */}
            <p>{name}</p>
          </span>
          <BadgeBG>
            <BadgeContainer>
              {<img className={classes.icon} src={intelligence} />}
            </BadgeContainer>
            <BadgeContainer>
              {<img className={classes.icon} src={creativity} />}
            </BadgeContainer>
            <BadgeContainer>
              {<img className={classes.icon} src={activity} />}
            </BadgeContainer>
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
