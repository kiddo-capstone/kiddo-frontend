import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import ProgressBar from "../../ui/progressBar/ProgressBar";
import MiniAuth from "../auth/MiniAuth";
import { useAuth0 } from "@auth0/auth0-react";

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
    // backgroundColor: "#3e4453",
    // backgroundImage: 'radial-gradient(#186aff6b, #4e1e1e42), url("https://image.freepik.com/free-vector/black-white-star-pattern-background-graphic_1165-1161.jpg")',
    backgroundSize: "cover",
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "20px",
    height: "30%",
    // background: appStyles.colors.grey3,
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
    // color: appStyles.colors.green,
    color: 'gold',
  },
  avatar: {
    margin: "auto",
    position: "relative",
    background: appStyles.colors.white,
    marginBottom: "0.7em",
    width: "220px",
    height: "200px",
    borderRadius: "50%",
    border: `10px solid gold`,
    // border: `5px solid ${appStyles.colors.darkGrey}`,
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
    color: 'gold',
    // color: appStyles.colors.green,
    marginLeft: "10px",
    textAlign: "left",

    "& th": {
      color: 'gold',
      // color: appStyles.colors.green,
    },
    "& td": {
      fontFamily: appStyles.fonts.primary,
      color: appStyles.colors.white,
    },
  },
  statRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

const stats = [
  // { barColor: appStyles.colors.red, completed: 60 },
  // { barColor: appStyles.colors.red, completed: 30 },
  // { barColor: appStyles.colors.red, completed: 53 },
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
