import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import ProgressBar from "../../ui/progressBar/progressBar";
import Auth from "../auth/Auth";
import { useAuth0 } from "@auth0/auth0-react";

const appStyles = theme;

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceAround",
    color: appStyles.colors.yellow,
  },
  card: {
    height: "450px",
    boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    backgroundColor: appStyles.colors.greyAccent,
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "30%",
    // background: appStyles.colors.greyAccent,
    background: `linear-gradient(to top, ${appStyles.colors.red}, ${appStyles.colors.yellow})`,
    backgroundSize: "cover",
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
  },
  avatar: {
    margin: "auto",
    position: "relative",
    background: appStyles.colors.greyAccent,
    marginBottom: "0.7em",
    width: "220px",
    height: "200px",
    borderRadius: "50%",
    border: `2px solid ${appStyles.colors.yellow}`,
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
  table: {
    marginTop: "10px",
    width: "100%",
    fontSize: "20px",
    marginLeft: "10px",
    textAlign: "left",

    "& th": {
      
    },
    "& td": {
      fontFamily: appStyles.fonts.primary,
      color: appStyles.colors.white,
    },
  },
  statBox: {
    // paddingTop: "10px"
  },
  statRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

const stats = [
  { barColor: appStyles.colors.yellow, completed: 60 },
  { barColor: appStyles.colors.yellow, completed: 30 },
  { barColor: appStyles.colors.yellow, completed: 53 },
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

          <table className={classes.table}>
            <tbody>
              <tr>
                <th>Date:</th>
                <td>{ new Date().toLocaleDateString() }</td>
              </tr>
              <tr>
                <th>Agent Status:</th>
                <td>😃</td>
              </tr>
              <tr>
                <th>Points:</th>
                <td>60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <span style={{ textAlign: "center", color: appStyles.colors.yellow }}>
        <h2>STATS</h2>
      </span>

      <div className={classes.statBox}>
        {stats.map((item, idx) => (
          <div className={classes.statRow}>
            <div className={classes.icon}>❤️</div>
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
