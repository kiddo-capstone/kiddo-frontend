import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import bubbles from "../../assets/bubbles.svg";
import ProgressBar from "../../ui/progressBar/ProgressBar";
import MiniAuth from "../auth/MiniAuth";
import { useAuth0 } from "@auth0/auth0-react";
import StatusForm from "./StatusForm";

const appStyles = theme;

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceAround",
  },
  card: {
    // boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    height: "auto",
    overflow: "hidden",
    //                        **  PASS IN VAR FOR MOOD COLORING  **
    backgroundImage: `linear-gradient(1deg, #3E4452, #00f24294), url(${bubbles})`,
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
    // background: appStyles.colors.white,
    // marginBottom: "0.7em",
    // border: `4px solid gold`,
    // border: `5px solid ${appStyles.colors.darkGrey}`,
    margin: "auto",
    position: "relative",
    backgroundImage: 'radial-gradient(#00fde6, transparent)',
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
    justifyContent: "space-between",
    padding: "0 2em",
    color: appStyles.colors.white
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
  const { user, isAuthenticated } = useAuth0()

  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.avatar}>
            <img src={!isAuthenticated ? kids : user.picture} />
          </div>

          <span className={classes.titleText}>
            <h1>{!isAuthenticated ? 'Secret Agent' : user.name}</h1> 
          </span>

          <hr />
          <div className={classes.details}>
            <div className={classes.detailsChild}>
              <h3>Date:</h3>
              <h4>{ new Date().toLocaleDateString() }</h4>
            </div>
            <div className={classes.detailsChild}>
              <h3>Points:</h3>
              <h4>###</h4>
            </div>
            <div className={classes.detailsChild}>
              <h3>Agent Status:</h3>
              <StatusForm />
            </div>
          </div>
        </div>
      </div>
      <span style={{ textAlign: "center", color: appStyles.colors.white }}>
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
      <MiniAuth />
    </section>
  );
};

export default React.memo(AgentDetails);
