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
import Container from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// App Imports
import theme from "../common/theme";
import Header from "../../modules/common/header/Header";

const appStyles = theme;
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: appStyles.colors.primary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: appStyles.colors.primary,
    fontFamily: "'Russo One', sans-serif",
    fontSize: "calc(10px + 2vmin)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#282c34",
    fontFamily: "'Russo One', sans-serif",
  },
  pageContainer: {
    textAlign: "center",
    // backgroundColor: "#282c34",
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
  toolbar: theme.mixins.toolbar,
}));

function PageContainer(props) {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar className={classes.appBar}>AGENT DETAILS</Toolbar>
      <Divider />
      <div className={classes.drawerPaper} />
      <img src="http://www.clker.com/cliparts/6/8/2/d/15164313681889389218spy-kids-gadgets-clipart.hi.png" />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            ⭐
          </IconButton>
          Welcome, Agent Sally!
        </Toolbar>
      </AppBar>

      <Hidden smUp implementation="js">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <section className={classes.pageContainer}>
          <Header />
          {children}
        </section>
      </main>
    </div>
  );
}

export default PageContainer;
