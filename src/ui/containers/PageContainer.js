import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../common/theme";

const appStyles = theme;
const drawerWidth = 300;

// const drawerWidth = 240;
const drawerHeight = 40;
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    textAlign: "center",
    backgroundColor: appStyles.colors.background,
    margin: ((theme) => theme.margin || 'default'),
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

const PageContainer = (props) => {
  const classes = useStyles(props);

  return <div className={classes.pageContainer}>{props.children}</div>;
};

export default React.memo(PageContainer);
