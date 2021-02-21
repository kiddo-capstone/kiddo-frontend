import React from "react";
import Button from "../../../ui/button/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import * as colors from '../../../ui/common/colors'

const useStyles = makeStyles(primary => ({
  navbar: {
    background: "rebeccapurple",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 6%",
  },
  linkContainer: {
    display: "flow-root",
    flex: 1,
    direction: "rtl",
  },
  left: {
    flex: 1,
    fontFamily: 'Russo One',
    color: colors.green,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.navbar}>
      <section className={classes.left}>
        <h1>BRANDING + NAVBAR</h1>
      </section>
      <nav className={classes.linkContainer}>
        <Link className={classes} title="mission control" to="/mission-control">
          <Button>Mission Control</Button>
        </Link>
        <Link className={classes} title="style guide" to="/style-guide">
          <Button>Style Guide</Button>
        </Link>
        <Link className={classes} title="home" to="/">
          <Button>Home</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
