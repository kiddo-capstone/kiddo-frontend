import React from "react";
import { makeStyles } from "@material-ui/core";
import theme from "../common/theme";

const drawerWidth = 300;

const drawerHeight = 40;
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    textAlign: "center",
    margin: (theme) => theme.margin || "default",
    marginTop: "45px",
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: (theme) => theme.justify || "center",
    alignItems: (theme) => theme.align || "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    fontFamily: "'Russo One', sans-serif",
    [theme.breakpoints.up("md")]: {
      marginLeft: drawerWidth,
      marginTop: drawerHeight - 20,
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "45px",
    },
  },
}));

const PageContainer = (props) => {
  const classes = useStyles(props);

  return <div className={classes.pageContainer}>{props.children}</div>;
};

export default React.memo(PageContainer);
