import React from "react";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import PageContainer from "../containers/PageContainer";
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
    padding: "10px",
    color: "white",
    fontFamily: appStyles.fonts.secondary,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    margin: "2em",
    color: "white",
  },
  content: {
    color: "white",
  },
  icon: {
    margin: "auto",
    position: "relative",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      // objectFit: "cover"
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
          <div className={classes.title}>
            <img
              className={classes.icon}
              src="https://static.thenounproject.com/png/1085386-200.png"
            />
            <h2 className={classes.root} id="message-title">
              {title}
            </h2>
          </div>
          <div className={classes.root}>
            <span id="message-content">{message}</span>
          </div>
          <DialogActions className={classes.title}>
            <Button onClick={handleClose}>
              <span className={classes.content}>OK!</span>
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </div>
  );
}
