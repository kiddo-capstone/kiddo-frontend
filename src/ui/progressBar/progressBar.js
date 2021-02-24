import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../common/theme";
const appStyles = theme;

const useStyles = makeStyles((theme) => ({}));

const ProgressBar = (props) => {
  const { bgcolor, completed } = props;
  return (
    <div>
      <div>
        <span>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
