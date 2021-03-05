import React from "react";
import { makeStyles } from "@material-ui/core";
import * as fonts from "../common/fonts";
import * as colors from "../common/colors";

const useStyles = makeStyles((theme) => ({
  butt: {
    fontSize: "1em",
    fontWeight: "400",
    padding: "2%",
    fontFamily: fonts.secondary,
    borderRadius: "15px",
    // previous theme:
    // borderColor: ((theme) => theme.primary ? colors.darkBlue :  colors.darkPink),
    // color: ((theme) => theme.primary ? colors.primaryAccent :  colors.secondaryAccent),
    // background: 'transparent',
    // background: ((theme) => theme.primary ? colors.blue :  colors.pink),
    border: "solid 3px",
    width: "40%",
    borderColor: (theme) => (theme.primary ? colors.blue : colors.blue),
    background: "transparent",
    color: (theme) => (theme.primary ? colors.blue : colors.blue),
    outline: "none",
    willChange: "transform",
    margin: "2%",
    cursor: "pointer",
    transition:
      "transform ease .3s, border ease 2s, background ease .3s, color ease .3s",
    "&:hover": {
      borderColor: (theme) => (theme.primary ? colors.blue : colors.blue),
      background: (theme) => (theme.primary ? colors.blue : colors.blue),
      color: (theme) => (theme.primary ? "#232323" : "#232323"),
      transform: "translateY(-3%)",
    },
    "&:disabled": {
      borderColor: colors.grey1,
      color: colors.grey3,
      cursor: "default",
      transform: "none",
      "&:hover": {
        borderColor: colors.grey1,
        color: colors.grey3,
        background: "none",
      },
    },
  },
}));

const Button = (props) => {
  const { children, disabled, primary, ...others } = props;
  const classes = useStyles(props);
  return (
    <button
      aria-label={children}
      className={classes.butt}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
