import React from "react";
import theme from "../common/theme";
const appStyles = theme;

const ProgressBar = (props) => {
  const { barColor, completed } = props;

  const container = {
    height: 20,
    width: "80%",
    backgroundColor: appStyles.colors.grey1,
    borderRadius: 50,
    margin: 10,
  };

  const filler = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: barColor,
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const label = {
    padding: 5,
    color: appStyles.colors.black,
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
