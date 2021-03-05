import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Button from "../button/Button";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import * as fonts from "../common/fonts";
import * as colors from "../common/colors";

const appStyles = theme;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#232323",
    border: `3px solid ${appStyles.colors.yellow}`,
    padding: ".2em",
    color: "white",
    minWidth: "100%",
    // maxWidth: "100%",
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
  },
  content: {
    padding: "1em",
    color: appStyles.colors.white,
    fontSize: 16,
    fontFamily: appStyles.fonts.secondary,
  },
  button: {
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
    borderColor: (theme) => (theme.primary ? colors.blue : colors.darkPink),
    background: "transparent",
    color: (theme) => (theme.primary ? colors.blue : colors.darkPink),
    outline: "none",
    willChange: "transform",
    margin: "2%",
    cursor: "pointer",
    // transition:
    //   "transform ease .3s, border ease 2s, background ease .3s, color ease .3s",
    "&:hover": {
      // borderColor: ((theme) => theme.primary ? colors.darkBlue :  colors.darkPink),
      background: (theme) => (theme.primary ? colors.blue : colors.darkPink),
      color: (theme) => (theme.primary ? "#C0C0C1" : "#3E4452"),
      transform: "translateY(-3%)",
    },
    "&:hover": {
      borderColor: colors.grey1,
      color: colors.grey3,
      background: "none",
    },
  },
}));

export default function ModalWrapper({
  btnMessage,
  children,
  open,
  handleClose,
  handleClickOpen,
  id,
}) {
  const classes = useStyles();

  return (
    <div>
      <button
        className={classes.button}
        id={id}
        style={{ border: "none", background: "transparent", color: "#ffd602" }}
        onClick={handleClickOpen}
      >
        {btnMessage}
      </button>
      <Dialog
        id={id}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // className={classes.root} ** This will display only the modal
        onClose={handleClose}
        aria-labelledby="modal-wrapper"
      >
        <section className={classes.root}>{children}</section>
      </Dialog>
    </div>
  );
}
