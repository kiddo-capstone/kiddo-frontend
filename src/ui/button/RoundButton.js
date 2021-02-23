import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  round: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#575757",
    color: "gold",  
    border: 'solid 3px gold',
    height: "5em",
    width: "5em",
    borderRadius: "50%",
    willChange: "transform",
    cursor: "pointer",
    transition: "transform ease .3s, background ease .2s, color ease .2s",
    "&:hover": {
      transform: "scale(1.05)",
      background: "gold",
      color: "#575757",
    },
  },
}));

const RoundButton = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.round}>
      <h4 style={{ margin: 0 }}>{children}</h4>
    </div>
  );
};

export default RoundButton;
