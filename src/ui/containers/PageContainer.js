import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  pageContainer: {
    textAlign: "center",
    backgroundColor: "#282c34",
    margin: "0 6%",
    marginTop: "1%",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    fontFamily: "'Russo One', sans-serif",
  },
}));

const PageContainer = ({ children }) => {
  const classes = useStyles();

  return <section className={classes.pageContainer}>{children}</section>;
};

export default PageContainer;
