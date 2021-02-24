import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../common/theme";
const appStyles = theme;

const useStyles = makeStyles((completed, bgcolor) => ({
  container: {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  },
  filler: {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
  },
  label: {
    fontFamily: appStyles.fonts.secondary,
    padding: 5,
    color: appStyles.colors.black,
    fontWeight: "bold",
  },
}));

const ProgressBar = (props) => {
  const classes = useStyles();
  const { bgcolor, completed } = props;
  return (
    <div className={classes.container}>
      <div className={classes.filler}>
        <span className={classes.label}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
