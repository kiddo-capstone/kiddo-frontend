import TitleContainer from "../../ui/containers/TitleContainer";
import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme"

const appStyles = theme;

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: appStyles.colors.secondary,
    border: `6px solid ${appStyles.colors.secondaryAccent}`
  },
  titleText: {
    fontFamily: theme.fonts.primary,
    fontSize: 10,
    alignSelf: 'center'
  },
  avatar: {
    position: "relative",
    margin: "auto",
    top: "40px",
    right: 0,
    left: 0,
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    boxShadow: `0 0 0 5px #151515,
                inset "0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,
                inset 0 0 0 5px #000000,`,
    background: "white",
    overflow: "hidden",
    animation: "mvTop 1.5s",
      "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover"
  }
}

}))

const AgentDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <span className={classes.titleText}><h1>Welcome, Agent Sally!</h1></span>
        <div className={classes.avatar}>
      
        <img src="http://www.clker.com/cliparts/6/8/2/d/15164313681889389218spy-kids-gadgets-clipart.hi.png" />
    </div>
    </div>
  );
};

export default React.memo(AgentDetails);