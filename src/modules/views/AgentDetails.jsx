import React, { useContext, useState, useEffect } from "react";
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import ProgressBar from "../../ui/progressBar/ProgressBar";
// import { useAuth0 } from "@auth0/auth0-react";
import StatusForm from "./StatusForm";
import SignUp from "../login/SignUp.js";

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
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
  },
  icon: {
    alignSelf: "center",
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  detailsChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 1em",
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
}));

const stats = [
  { barColor: 'gold', completed: 60 },
  { barColor: 'gold', completed: 30 },
  { barColor: 'gold', completed: 53 },
];

const AgentDetails = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  // const { user, isAuthenticated } = useAuth0();
  
  
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.avatar}>
            <img src={kids} />
          </div>
      
          <span className={classes.titleText}>
            <h1>{state.currentUser !== null ? state.currentUser.attributes.name : 'KidDo Agent'}</h1> 
          </span>

          <hr />
          <div className={classes.details}>
            <div className={classes.detailsChild}>
              <h2>Date:</h2>
              <h3>{ new Date().toLocaleDateString() }</h3>
            </div>
             {state.currentUser !== null && (
            <div className={classes.detailsChild}>
              <h2>Points:</h2>
              <h3>{state.currentUser.attributes.points}</h3>
            </div>
             )}
            <div className={classes.detailsChild}>
              <h2>Agent Status:</h2>
                <StatusForm />
            </div>
          </div>
        </div>
      </div>
      {state.currentUser !== null && (
      <div>
        <span style={{ textAlign: "center", color: appStyles.colors.yellow }}>
          <h2>STATS</h2>
        </span>
        
          <div>
            {stats.map((item, idx) => (
              <div className={classes.statRow} key={`statRow-${idx}`}>
                <div className={classes.icon} key={`icon-${idx}`}>❤️</div>
                <ProgressBar
                  key={idx}
                  barColor={item.barColor}
                  completed={item.completed}
                />
              </div>
            ))}
        </div> 
      </div>
      )}
    </section>
  );
};

export default React.memo(AgentDetails);
