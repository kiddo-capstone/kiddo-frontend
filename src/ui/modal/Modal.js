import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import RoundButton from "../button/RoundButton";
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
    backgroundColor: appStyles.colors.blue,
    padding: "0 1em 0 1em",
    color: "white",
    border: `2px solid ${appStyles.colors.background}`,
    boxShadow: `inset 5em 2em ${appStyles.colors.background}`,
    // minWidth: "100%",
    // maxWidth: "100%",

    fontFamily: appStyles.fonts.secondary,
  },
  titleBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",
    alignItems: "center",
    margin: "1em",
    color: appStyles.colors.white,
  },
  title: {
    fontSize: "clamp(10px, 1.5rem, 4vmin)",
    marginLeft: "20px",
    textShadow: `.2em .2em ${appStyles.colors.background}`,
    padding: 0,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: ".5em 1em 1em 1em",
    backgroundColor: appStyles.colors.background,
    color: appStyles.colors.white,
    fontSize: 16,
    fontFamily: appStyles.fonts.secondary,
  },
  icon: {
    position: "relative",
    maxWidth: "20%",
    height: "20%",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: appStyles.colors.white,
    "& img": {
      width: "100%",
      height: "100%",
      // objectFit: "cover"
    },
    buttonBar: {
      // display: "flex",
      // flexDirection: "row",
      // justifyContent: "center",
      alignSelf: "center",
      margin: "2em",
      color: appStyles.colors.white,
    },
    button: {
      textAlign: "center",
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
      <Button onClick={handleClickOpen}>Secret Message!</Button>
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
            <div className={classes.button} onClick={handleClose}>
              <RoundButton>OK!</RoundButton>
            </div>
          </div>
          {/* <div className={classes.buttonBar}>
            <RoundButton>
              <span onClick={handleClose} className={classes.buttonBar}>
                OK!
              </span>
            </RoundButton>
          </div> */}
        </div>
      </Dialog>
    </div>
  );
}
