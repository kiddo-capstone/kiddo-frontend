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
