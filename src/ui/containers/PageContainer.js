// React Imports
import React from "react";
import PropTypes from "prop-types";

// Material-ui Imports
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// App Imports
import theme from "../common/theme";
import Header from "../../modules/common/header/Header";

const useStyles = makeStyles(() => ({
  pageContainer: {
    // textAlign: 'center',
    // backgroundColor: '#282c34',
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

  return (
    <section className={classes.pageContainer}>
      <Header />
      {children}
    </section>
  );
};

export default PageContainer;
