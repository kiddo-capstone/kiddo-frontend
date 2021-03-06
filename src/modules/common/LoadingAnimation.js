import React from "react";
import { makeStyles } from "@material-ui/core";
import magnifyingGlass from "../../assets/magnifying-glass.png";

const useStyles = makeStyles(() => ({
  container: {
    display: "block",
  },
  glass: {
    animation: "$search infinite ease 4s",
  },
  "@keyframes search": {
    "0%": {
      transform: "translate(-3em, 0em) rotate(10deg)",
    },

    "50%": {
      transform: "translate(3em, 0em) rotate(-10deg)",
    },
    "100%": {
      transform: "translate(-3em, 0em) rotate(10deg)",
    },
  },
}));

const LoadingAnimation = () => {
  const classes = useStyles();

  return (
    <img
      className={classes.glass}
      style={{ height: "12em" }}
      src={magnifyingGlass}
      alt="magnifying glass"
    />
  );
};

export default LoadingAnimation;
