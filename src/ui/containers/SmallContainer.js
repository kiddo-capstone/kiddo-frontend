import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  smallContainer: {
    textAlign: "center",
    border: "solid .1px gold",
    borderRadius: '5px',
    height: "fit-content",
    padding: '.2em .2em',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    // margin: '1%',
    // backgroundColor: "#282c34",
    // fontFamily: "'Russo One', sans-serif",
  },
}));

const SmallContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.smallContainer}>{children}</div>;
};

export default SmallContainer;
