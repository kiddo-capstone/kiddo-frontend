import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import ProgressBar from "../../ui/progressBar/ProgressBar";
import Auth from "../auth/Auth";
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
    height: "auto",
    boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    backgroundColor: "#3e4453",
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "20px",
    height: "30%",
    background: appStyles.colors.grey3,
    backgroundSize: "cover",
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
    color: appStyles.colors.yellow,
  },
  avatar: {
    margin: "auto",
    position: "relative",
    background: appStyles.colors.white,
    marginBottom: "0.7em",
    width: "220px",
    height: "200px",
    borderRadius: "50%",
    border: `5px solid ${appStyles.colors.darkGrey}`,
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
  { barColor: appStyles.colors.red, completed: 60 },
  { barColor: appStyles.colors.red, completed: 30 },
  { barColor: appStyles.colors.red, completed: 53 },
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
              <h2>Date:</h2>
              <h4>{ new Date().toLocaleDateString() }</h4>
            </div>
            <div className={classes.detailsChild}>
              <h2>Points:</h2>
              <h4>###</h4>
            </div>
            <div className={classes.detailsChild}>
              <h2>Agent Status:</h2>
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
      <Auth />
    </section>
  );
};

export default React.memo(AgentDetails);
