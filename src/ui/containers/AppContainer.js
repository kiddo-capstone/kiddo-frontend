// React Imports
import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

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
import Button from "../button/Button";
import theme from "../common/theme";
import AgentDetails from "../../modules/views/AgentDetails";
import PageContainer from "./PageContainer";

const appStyles = theme;
const drawerWidth = 300;
// "clamp(240px, 30%, 40%)"

const useStyles = makeStyles(theme => ({
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
    backgroundColor: appStyles.colors.primary,
    fontFamily: "'Russo One', sans-serif",
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
    },
  },
  buttonGroup: {
    justifyContent: 'end',
    alignSelf: 'center'
  },
  headerButton: {
    margin: '.4em',
    backgroundColor: 'transparent',
  },
  toolbar: theme.mixins.toolbar,
}));

function AppContainer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isAuthenticated } = useAuth0();
  const { window } = props;

  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar className={classes.appBar}>AGENT DETAILS</Toolbar>
      <Divider />
      <AgentDetails />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{justifyContent: 'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            ⭐
          </IconButton>
          Welcome, Agent Sally!
          <div className={classes.buttonGroup}>
            <Link
              title="mission control"
              to="/mission-control">
              <Button className={classes.headerButton}>Mission Control</Button>
            </Link>
            <Link title="style guide" to="/style-guide">
              <Button className={classes.headerButton}>Style Guide</Button>
            </Link>
            <Link title="login" to="/login">
              <Button className={classes.headerButton}>{isAuthenticated ? 'Log Out' : 'Log In'}</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.drawer}>
        <Hidden smUp implementation="css">
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
            }}>
            {drawer}
          </Drawer>
        </Hidden>

        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </div>

      <main className={classes.content}>
        {/* <Header /> */}
        <PageContainer />
      </main>
    </div>
  );
}

export default AppContainer;
