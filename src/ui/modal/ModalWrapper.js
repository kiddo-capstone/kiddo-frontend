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

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: (theme) => (theme.backgroundColor ? theme.backgroundColor : "#232323"),
    border: (theme) => (theme.border ? theme.border : `3px solid ${appStyles.colors.yellow}`),
    padding: (theme) => (theme.padding ? theme.padding : '.3em 0'),
    color: "white",
    minWidth: (theme) => (theme.minWidth ? theme.minWidth : "100%"),
    maxWidth: (theme) => (theme.maxWidth ? theme.maxWidth : "1000px"),
    width: (theme) => (theme.width ? theme.width : "inherit"),
    minHeight: (theme) => (theme.minHeight ? theme.minHeight : "inherit"),
    maxHeight: (theme) => (theme.maxHeight ? theme.maxHeight : "inherit"),
    height: (theme) => (theme.height ? theme.height : "inherit"),
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
    fontFamily: fonts.secondary,
    fontSize: ".8em",
    background: "transparent",
    outline: "none",
    willChange: "transform",
    margin: "2%",
    cursor: "pointer",
    transition:
      "transform ease .3s, border ease 2s, background ease .3s, color ease .3s",
    "&:hover": {
      transform: "translateY(-5%)",
    },
  },
}));

// (theme) => (theme.primary ? colors.blue : colors.blue)
// max-width: 1000px;
// width: 50%;
// min-width: 300px;
// height: 50%;

export default function ModalWrapper(props) {
  const {
    btnMessage,
    children,
    open,
    handleClose,
    handleClickOpen,
    id,
  } = props
  const classes = useStyles(props);

  return (
    <div >
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
        aria-label="modal-wrapper"
      >
        <section className={classes.root}>{children}</section>
      </Dialog>
    </div>
  );
}
