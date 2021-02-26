import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  mediumContainer: {
    width: '90%',
    textAlign: "center",
    border: "solid 1px white",
    borderRadius: '5px',
    marginTop: "25px",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    padding: '1.5em .5em',
    backgroundColor: "#282c34",
  },
}));

const MediumContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.mediumContainer}>{children}</div>;
};

export default MediumContainer;
