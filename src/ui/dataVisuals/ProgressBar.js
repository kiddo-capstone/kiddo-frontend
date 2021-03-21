import React from "react";
import theme from "../common/theme";
const appStyles = theme;

const ProgressBar = (props) => {
  const { barColor, completed, total } = props;

  const container = {
    height: 20,
    width: "80%",
    backgroundColor: appStyles.colors.grey1,
    borderRadius: 50,
    margin: 10,
  };

  const filler = {
    height: "100%",
    width: `${(completed / total) * 100}%`,
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
  const determineTotalBar = (total, completed) => {
    if (total === 100 && completed <= total) {
      return <span style={label}>{`${completed}%`}</span>;
    } else if (total !== 100 && completed <= total) {
      return <span style={label}>{`${completed}/${total}`}</span>;
    }
  };
  return (
    <div style={container}>
      <div style={filler}>
        {/* {total === 100 && <span style={label}>{`${completed}%`}</span>}
        {total !== 100 && <span style={label}>{`${completed}/${total}`}</span>} */}
        {determineTotalBar(total, completed)}
      </div>
    </div>
  );
};

export default ProgressBar;
