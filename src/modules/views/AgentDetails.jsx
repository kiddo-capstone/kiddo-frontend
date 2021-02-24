import TitleContainer from "../../ui/containers/TitleContainer";
import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme"

const appStyles = theme;

// appStyles.colors.background (should be soft black) is not rendering 
// hex code is "#282c34"

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: "400px",
    // marginTop: "20px",
    // padding: "10px",
    // border: `6px solid ${appStyles.colors.primaryAccent}`,
    borderRadius: "10px",
    boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    // background: "#151515",
    overflow: "hidden",
    backgroundColor: appStyles.colors.secondary,
    background: `linear-gradient(to top, ${appStyles.colors.red}, ${appStyles.colors.primary})`
},
cardHeader: {
  position: "relative",
  height: "150px",
  // border: `6px solid ${appStyles.colors.primaryAccent}`,
  // background: `linear-gradient(to top, ${appStyles.colors.red}, ${appStyles.colors.primaryAccent})`,
  backgroundColor: appStyles.colors.primaryAccent,
  backgroundSize: "cover",
  // backgroundPosition: "top",
  // "&:after": {
    // content: "''",
    // position: "absolute",
    // width: "100%",
    // height: "100%",
    // background: `linear-gradient(to top, rgb(5,85,134), rgba(181,181,181, 0.1))`
  // }
},
titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "12px",
    textAlign: 'center',
    color: appStyles.colors.black
  },
  avatar: {
    position: "initial",
    margin: "auto",
    // top: "20px",
    // right: 0,
    // left: 0,
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    // boxShadow: "0 0 0 5px #151515",
    background: appStyles.colors.background,
    overflow: "hidden",
      "& img": {
        width: "100%",
        height: "100%",
        // objectFit: "cover"
  }
}

}))

const AgentDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
       {/* <div className={classes.dsTop}> */}
      <span className={classes.titleText}><h1>Welcome, Agent Sally!</h1></span>
        <div className={classes.avatar}>
        <img src="http://www.clker.com/cliparts/6/8/2/d/15164313681889389218spy-kids-gadgets-clipart.hi.png" />
    </div>
    </div>
    </div>
  );
};

export default React.memo(AgentDetails);