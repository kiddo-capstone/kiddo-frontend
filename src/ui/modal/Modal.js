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
    padding: ".5em",
    color: "white",
    // minWidth: "100%",
    // maxWidth: "100%",

    fontFamily: appStyles.fonts.secondary,
  },
  titleBar: {
    display: "flex",
    flexDirection: "row",
    margin: "1em",
    color: appStyles.colors.green,
  },
  title: {
    fontSize: "clamp(5px, 1.75rem, 4vmin)",
    marginLeft: "20px",
  },
  content: {
    padding: "1em",
    color: appStyles.colors.white,
    fontSize: 16,
    fontFamily: appStyles.fonts.secondary,
  },
  icon: {
    position: "relative",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: appStyles.colors.green,
    "& img": {
      width: "100%",
      height: "100%",
      // objectFit: "cover"
    },
    buttonBar: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
    },
    button: {
      display: "flex",
      color: appStyles.colors.white,
      alignSelf: "center",
    },
  },
}));

export default function Modal({ title, message, children }) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Secret Message!
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        // className={classes.root} ** This will display only the modal
        onClose={handleClose}
        aria-labelledby="agent-modal-container"
      >
        <div className={classes.root}>
          <div className={classes.titleBar}>
            <img
              className={classes.icon}
              src="https://static.thenounproject.com/png/1085386-200.png"
            />
            <div className={classes.title}>
              <h2 id="message-title">{title}</h2>
            </div>
          </div>
          <div className={classes.content} id="message-content">
            {message}
          </div>
          <div className={classes.buttonBar}>
            <Button onClick={handleClose}>
              <span className={classes.content}>OK!</span>
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
