import TitleContainer from "../../ui/containers/TitleContainer";
import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme"

const appStyles = theme;

// appStyles.colors.background (should be soft black) is not rendering 
// hex code is "#282c34"

const useStyles = makeStyles(() => ({
  root: {
    // padding: "10px"
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'spaceAround',
    height: "450px",
    // border: `6px solid ${appStyles.colors.background}`,
    // borderRadius: "10px",
    // boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    backgroundColor: "#3e4453",
    // background: `linear-gradient(to top, ${appStyles.colors.red}, ${appStyles.colors.primary})`
},
cardHeader: {
  position: "relative",
  paddingTop: "50px",
  paddingBottom: "50px",
  height: "30%",
  // border: `6px solid ${appStyles.colors.primaryAccent}`,
  // background: `linear-gradient(to top, ${appStyles.colors.red}, ${appStyles.colors.primaryAccent})`,
  background: "#3e4453",
  backgroundSize: "cover",
},
titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "12px",
    textAlign: 'center',
    color: appStyles.colors.white
  },
  avatar: {
    margin: "auto",
    position: "relative",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    // boxShadow: `0 0 0 3px ${appStyles.colors.background}`,
    overflow: "hidden",
      "& img": {
        width: "100%",
        height: "100%",
        // objectFit: "cover"
      },
  },
  icon: {
    margin: "auto",
    position: "relative",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    // boxShadow: `0 0 0 3px ${appStyles.colors.background}`,
    overflow: "hidden",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      },
  },
  table: {
    marginTop: "20px",
    width: "95%",
    fontSize: "16px",
    color: appStyles.colors.white,
    "&:th": {
      
    },
    "&:td": {
      backgroundColor: appStyles.colors.green,
      fontSize: "20px"
    },
  },
}))

const AgentDetails = () => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
    <div className={classes.card}>
      {/* <div className={classes.cardHeader}> */}
        {/* <span className={classes.titleText}><h1>Welcome, Agent Sally!</h1>
        </span> */}
        <div className={classes.avatar}>
          <img src="https://image.freepik.com/free-vector/little-kid-avatar-profile_18591-50928.jpg" />
        </div>
      <table className={classes.table}>
        <tbody>
        <tr>
          <th>Date</th>
          <td>Tuesday, February 22, 2021</td>
        </tr>
        <tr>
          <th>Agent Status</th>
          <td>Status Icon</td>
        </tr>
        <tr>
          <th>Points</th>
          <td>60</td>
        </tr>
        </tbody>
      </table>
      </div>
      <div className={classes.icon}>
        <img src="https://cdn1.vectorstock.com/i/1000x1000/10/70/golden-coin-with-star-icon-for-game-vector-11791070.jpg" />
      </div>
    {/* </div> */}
    </section>
  );
};

export default React.memo(AgentDetails);