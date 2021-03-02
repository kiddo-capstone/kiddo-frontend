import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((color) => ({
  round: {
    fontSize: ".9em",
    fontWeight: "400",
    padding: "2%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: (color) => color || "#3e4452",
    color: "gold",
    border: "solid 3px gold",
    height: "clamp(40px, 5em, 300px)",
    width: "clamp(40px, 5em, 300px)",
    // fontSize: 'clamp(20px, 1%, 280px)',
    // fontSize: '1em',
    borderRadius: "50%",
    willChange: "transform filter",
    cursor: "pointer",
    transition: "transform ease .3s, background ease .2s, color ease .2s",
    "&:hover": {
      filter: 'drop-shadow(1px 4px 3px black)',
      transform: "scale(1.05)",
      background: "gold",
      color: "#3e4452",
    },
  },
}));

const RoundButton = ({ children, color }) => {
  const classes = useStyles(color);

  return (
    <div className={classes.round}>
      <h4 style={{ textAlign: "center", margin: 0 }}>{children}</h4>
    </div>
  );
};

export default RoundButton;
