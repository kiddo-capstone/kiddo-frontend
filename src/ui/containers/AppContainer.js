// React Imports
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Material-ui Imports
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";

// App Imports
import theme from "../common/theme";
import AgentDetails from "../../modules/views/AgentDetails";
import PageContainer from "./PageContainer";
import magnifyingGlass from "../../assets/magnifying-glass.png";

const appStyles = theme;
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: appStyles.fonts.primary,
  },
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1c1c1c",
    filter: "drop-shadow(2px 4px 6px black)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "#1c1c1c",
    fontSize: "calc(10px + 2vmin)",
    [theme.breakpoints.up("md")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      display: "none",
    },
  },
  content: {
    flexGrow: 1,
    marginTop: 0,
    fontFamily: "'Russo One', sans-serif",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
    },
  },

  buttonGroup: {
    justifyContent: "end",
    alignSelf: "center",
  },
  headerButton: {
    margin: ".4em",
    backgroundColor: "transparent",
  },

  toolbar: {
    minHeight: theme.mixins.toolbar,
    textAlign: "center",
  },
}));

function AppContainer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { window } = props;

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <AgentDetails />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <img
              src={magnifyingGlass}
              alt="magnifying glass"
              style={{ height: "2em" }}
            />
          </IconButton>
          Welcome{isAuthenticated && ` ${user.given_name}`}!
        </Toolbar>
      </AppBar>
      <div className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            // disablePortal={true}
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

        <Hidden smDown implementation="css">
          <Drawer
            // container={container}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>

      <main className={classes.content}>
        <PageContainer />
      </main>
    </div>
  );
}

export default AppContainer;
