import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../common/theme";
const appStyles = theme;

const ProgressBar = (props) => {
  const { barColor, completed } = props;

  const container = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const filler = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: barColor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const label = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={container}>
      <div style={filler}>
        <span style={label}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
