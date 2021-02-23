import React from "react";
import { makeStyles } from "@material-ui/core";

const drawerWidth = 240;
const drawerHeight = 40;
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    textAlign: "center",
    backgroundColor: "#282c34",
    marginTop: "25px",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    fontFamily: "'Russo One', sans-serif",
    // media query for pushing page content past drawer
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
      marginTop: drawerHeight,
    },
  },
}));

const PageContainer = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.pageContainer}>{children}</div>;
};

export default React.memo(PageContainer);
