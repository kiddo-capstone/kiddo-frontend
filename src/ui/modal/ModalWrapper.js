import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Button from "../button/Button";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";

const appStyles = theme;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#3e4452",
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
}));

export default function ModalWrapper({
  btnMessage,
  children,
  open,
  handleClose,
  handleClickOpen,
}) {
  const classes = useStyles();

  return (
    <div>
      <Button
        style={{ border: "none", background: "transparent", color: "#ffd602" }}
        onClick={handleClickOpen}
      >
        {btnMessage}
      </Button>
      <Dialog
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
