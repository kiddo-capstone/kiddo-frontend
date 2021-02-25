import React from "react";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
// import PageContainer from "../containers/PageContainer";
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

    fontFamily: appStyles.fonts.secondary,
  },
  titleBar: {
    display: "flex",
    flexDirection: "row",
    // fontSize: "clamp(5px, 1.75rem, 4vmin)",
    // justifyContent: "space-around",
    margin: "1em",
    color: appStyles.colors.green,
  },
  title: {
    fontSize: 20,
    marginLeft: "20px",
  },
  content: {
    padding: "1em",
    color: appStyles.colors.white,
    fontSize: 18,
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
      // color: appStyles.colors.white,
      alignSelf: "center",
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
        // className={classes.root}
        onClose={handleClose}
        aria-labelledby="agent-modal-container"
      >
        <div className={classes.root}>
          <div className={classes.titleBar}>
            <img
              className={classes.icon}
              src="https://static.thenounproject.com/png/1085386-200.png"
            />
            <h1 className={classes.title} id="message-title">
              {title}
            </h1>
          </div>
          <div className={classes.content}>
            <span id="message-content">{message}</span>
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
