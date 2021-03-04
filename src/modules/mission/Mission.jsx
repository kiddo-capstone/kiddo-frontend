import React, { useContext, useState, useEffect } from "react";
import AppContext from "../App/AppContext";
import { BadgeContainer } from "../../ui/containers/index";
import BadgeBG from "../../ui/badges/BadgeBg";
import RoundButton from "../../ui/button/RoundButton";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {basicTraining, healthTraining, creativityTraining, brainTraining} from "../../assets/index";
import { convertDate } from "../common/convertDate";
import {getTasksByMissionId} from '../common/apiCalls'

const useStyles = makeStyles(theme => ({
  missionWrapper: {
    margin: ".5em 0",
    width: "90%",
    height: "fit-content",
  },
  mission: {
    height: "clamp(60px, 7em, 25vmin)",
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
      filter: 'drop-shadow(0px 4px 4px grey)',
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
    willChange: 'filter',
  },
  icon: {
    height: "1.5em",
    filter: 'drop-shadow(1px 4px 4px black)',
  },
}));

// it's strange, had to pull props out of props??
const Mission = props => {
  const [state, dispatch] = useContext(AppContext);
  const [thisMission, setThisMission] = useState(null)
  const [totalPoints, setTotalPoints] = useState(0)

  const {props: { attributes: { name, due_date, user_id, created_at, updated_at } } } = props;
  const { theme: { colors } } = state;
  const classes = useStyles(state.theme.colors);
  const assignedDate = convertDate(created_at).stringDate;
  const assignedDay = convertDate(created_at).stringDay;

  useEffect(async() => {
    return await getTasksByMissionId(props.props.id)
    .then(response => setThisMission(response.data))
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    if (thisMission !== null) {
      getTotalPoints()
    }
  }, [thisMission])

  const getTotalPoints = () => {
    const total = thisMission.reduce((missionPoints, task) => {
      let taskPoints = task.attributes.points
      missionPoints += taskPoints
      return missionPoints
    }, 0)
    setTotalPoints(total)
  }

  const getTaskBadges = () => {
    return thisMission.map((task,i) => {
      let category = task.attributes.task_category
      if (category === 'Brain Training') {
        return(
          <BadgeContainer key={i}>
            {<img className={classes.icon} src={brainTraining.img} alt={brainTraining.desc}/>}
          </BadgeContainer>
        )
      } else if (category === 'Creativity Training') {
        return(
          <BadgeContainer className={classes.icon} key={i}>
            {<img className={classes.icon} src={creativityTraining.img} alt={creativityTraining.desc}/>}
          </BadgeContainer>
        )
      } else if (category === 'Health Training') {
        return(
          <BadgeContainer key={i}>
            {<img className={classes.icon} src={healthTraining.img} alt={healthTraining.desc}/>}
          </BadgeContainer>
        )
      } else if (category === 'Basic Training') {
        return(
          <BadgeContainer key={i}>
            {<img className={classes.icon} src={basicTraining.img} alt={basicTraining.desc}/>}
          </BadgeContainer>
        )
      }
    })
  }

  return (
    <div className={classes.missionWrapper}>
      <div className={classes.mission}>
        <div className={classes.left}>
          <p>{assignedDay}</p>
          <p>{assignedDate}</p>
          <span className={classes.category}>
            <p>💰 X {totalPoints && totalPoints}</p>
          </span>
        </div>
        <div>
        </div>
        <div className={classes.middle}>
          <span className={classes.title}>
            <p>{name}</p>
          </span>
          <BadgeBG>
            {thisMission && getTaskBadges()}         
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
