import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import Button from "@material-ui/core/Button";
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
      style={{ height: "20%" }}
      src={magnifyingGlass}
      alt="magnifying glass"
    />
  );
};

export default LoadingAnimation;
