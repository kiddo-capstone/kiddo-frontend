import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  titleContainer: {
    textAlign: "center",
    justifyContent: "center",
    zIndex: 1,
  },
}));

const TitleContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.titleContainer}>{children}</div>;
};

export default TitleContainer;
