import React, { useContext, useState, useEffect } from "react";
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import StatusForm from "./StatusForm";
import { basicTraining, creativityTraining, healthTraining, brainTraining } from "../../assets/index";
import { useHistory } from "react-router-dom";
import MiniAuth from "../auth/MiniAuth";
import { getUserById } from "../common/apiCalls";
import ProgressBar from "../../ui/dataVisuals/ProgressBar";

const appStyles = theme;

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceAround",
  },
  card: {
    height: "auto",
    overflow: "hidden",
    backgroundPosition: 'center',
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "20px",
    height: "30%",
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
    color: 'gold',
  },
  avatar: {
    filter: 'drop-shadow(2px 4px 6px black)',
    backgroundImage: 'linear-gradient(359deg, #e4572e9e, #00e7ff47)',
    margin: "auto",
    position: "relative",
    width: "220px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    cursor: "pointer",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
  },
  icon: {
    margin: "0.6em",
    height: "3.5em",
    alignItems: "flex-start",
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  detailsChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 2em",
    color: appStyles.colors.white,
    "& h2:nth-child(1)": {
      color: appStyles.colors.yellow,
    },
  },
  statRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  login: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0.6em 1.5em",
    "& h2:nth-child(1)": {
      color: appStyles.colors.white,
    }
  }
}));

const AgentDetails = (props) => {
  const history = useHistory()
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  const [sessionUser, setSessionUser] = useState(state.currentUser)
  
  const stats = [
    { icon: brainTraining, barColor: 'gold', completed: 60 },
    { icon: creativityTraining, barColor: 'gold', completed: 30 },
    { icon: healthTraining, barColor: 'gold', completed: 53 },
    { icon: basicTraining, barColor: 'gold', completed: 53 },
  ];

    useEffect(() => {
      if (state.currentUser !== null && state.currentUser.type === 'user') { 
        setSessionUser(state.currentUser)
      } 
    }, [state.currentUser])

    useEffect(() => {
      if (sessionUser !== null) {
        updateUserDetails()
      }
    }, [state])

  const updateUserDetails = async () => {
    await getUserById(+sessionUser.id).then(data => setSessionUser((data.data))).then(console.log("updated session user", sessionUser))
  }

  const determinePath = () => {
    return !state.currentUser ? history.push("/welcome") : history.push("/mission-control") 
  }

  const getPointsProgress = (points, target) => {
    if (points < target) {
      return ((points / target) * 100).toFixed(1)
    } else if (points === target) {
      // Could put a fun animation in here!
      // Then it needs to either reload a progress bar,
      // OR no progress bar and starts Points
      // Back at 0 + the difference once user hits the target 
      return "You did it!"
    }
  }
    
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.avatar} onClick={() => determinePath()}>
            <img src={kids} />
          </div>

          <span className={classes.titleText}>
            <h1>{sessionUser !== null ? sessionUser.attributes.name : 'KidDo Agent'}</h1> 
          </span>

          <hr />
          <div className={classes.details}>
            <div className={classes.detailsChild}>
              <h2>Date:</h2>
              <h3>{ new Date().toLocaleDateString() }</h3>
            </div>
            <div className={classes.detailsChild}>
              <h2>Agent Status:</h2>
                <StatusForm />
            </div>
          {sessionUser !== null && (
            <>
              <div className={classes.detailsChild}>
                <h2>Points:</h2>
                <h3>{sessionUser.attributes.points}</h3>
              </div>
              <span className={classes.statRow}>
                <ProgressBar 
                  barColor={appStyles.colors.yellow} 
                  completed={getPointsProgress(sessionUser.attributes.points, 300)}
                />
              </span>
            </>
          )}
          </div>
        </div>
      </div>
      <MiniAuth />
    </section>
  );
};

export default React.memo(AgentDetails);
