import React, { useContext, useState, useEffect } from "react";
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import StatusForm from "./StatusForm";
import AgentStats from "./AgentStats";
import { useHistory } from "react-router-dom";
import MiniAuth from "../auth/MiniAuth";
import { getUserById } from "../common/apiCalls";
import ProgressBar from "../../ui/dataVisuals/ProgressBar";
import GoldCoinRain from "../../ui/animations/goldCoinRain";

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
    backgroundPosition: "center",
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    height: "30%",
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
    color: "gold",
  },
  avatar: {
    filter: "drop-shadow(2px 4px 6px black)",
    backgroundImage: "linear-gradient(359deg, #e4572e9e, #00e7ff47)",
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
      objectFit: "cover",
    },
  },
  icon: {
    margin: "0.6em",
    height: "3.5em",
    alignItems: "flex-start",
  },
  details: {
    display: "flex",
    flexDirection: "column",
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
    },
  },
  rainContainer: {
    height: 'inherit',
    width: 'inherit',
    overflow: 'none',
  },
}));

const AgentDetails = props => {
  const history = useHistory();
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  const [sessionUser, setSessionUser] = useState(state.currentUser);
  const [isRaining, setIsRaining] = useState(false);

  useEffect(() => {
    if (state.currentUser && state.currentUser.type === "user") {
      setSessionUser(state.currentUser);
      // determinePath();
    } else {
      setSessionUser(null);
    }
  }, [state.currentUser]);

  useEffect(() => {
    if (sessionUser !== null && sessionUser.type === 'user') {
      updateUserDetails();
    }
  }, [state.selectedTask, state.redeemed]);

  const updateUserDetails = async () => {
    const userPoints = sessionUser.attributes.points
    const details = await getUserById(+sessionUser.id)
    setSessionUser(details.data)
    if (details.data.attributes.points > userPoints) {
      makeItRain()
    }
  };

  const makeItRain = async () => {
    setIsRaining(true);
    await setTimeout(() => {
      setIsRaining(false);
    }, 6000);
  }
  
  const determinePath = () => {
    return !state.currentUser
      ? history.push("/")
      : history.push(`/mission-control/${state.currentUser.id}`);
  };

  const getPointsProgress = (points, target) => {
    if (points < target) {
      return ((points / target) * 100).toFixed(1);
    } else if (sessionUser.attributes.points > 100) {
      return ("Visit the store!")
      // Could put a fun animation in here!
      // Then it needs to either reload a progress bar,
      // OR no progress bar and starts Points
      // Back at 0 + the difference once user hits the target
    }
  };

  return (
    <section className={classes.section}>
      <div className={classes.rainContainer}>{isRaining === true && <GoldCoinRain />}</div>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.avatar} onClick={() => determinePath()}>
            <img src={kids} alt="KidDo Agents smiling logo"/>
          </div>
          <span className={classes.titleText}>
            <h1>
              {sessionUser !== null ? sessionUser.attributes.name : "KidDo"}
            </h1>
          </span>
          <hr />
          <div className={classes.details}>
            <div className={classes.detailsChild}>
              <h2>Date:</h2>
              <h3>{new Date().toLocaleDateString()}</h3>
            </div>
            {sessionUser !== null && sessionUser.type === "user" && (
              <>
            <div className={classes.detailsChild}>
              <h2>Agent Status:</h2>
              <StatusForm />
            </div>
            
                <div className={classes.detailsChild}>
                  <h2>Points:</h2>
                  <h3>{sessionUser.attributes.points}</h3>
                </div>
                <span className={classes.statRow}>
                  <ProgressBar
                    barColor={appStyles.colors.yellow}
                    completed={getPointsProgress(
                      sessionUser.attributes.points,
                      100
                    )}
                    total={100}
                  />
                </span>
                <span className={classes.titleText}>
                  <AgentStats />
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
