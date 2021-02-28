import React from "react";
import Button from "../../../ui/button/Button";
import { useHistory } from "react-router-dom";
import theme from "../../../ui/common/theme";
import { PageContainer } from "../../../ui/containers";
import error400 from "../../../assets/error-404.png"
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    color: theme.colors.white,
    textAlign: 'center'
  },
  img: {
    willChange: 'transform',
    width: '14em',
    animation: '$ufo infinite alternate 4s ease',
  },
  '@keyframes ufo': {
    '0%': {
      transform: 'translate(-3em, 0em) rotate(10deg)',
    },
    // '25%': {
    //   transform: 'translate(-1em, -2.2em) rotate(2deg)',
    // },
    // '50%': {
    //   transform: 'translate(1em, -2em) rotate(-2deg)',
    // },
    '100%': {
      transform: 'translate(3em, -.2em) rotate(-10deg)',
    },
    // '25%': {
    //   transform: 'translate(0em, -2em) rotate(7deg)',
    // },
    // '50%': {
    //   // transform: 'translateY(-1em)',
    //   transform: 'translate(2em, -1em) rotate(2deg)',
    // },
    // '75%': {
    //   transform: 'translate(1em, 0em) rotate(-5deg)',
    //   // transform: 'translate(-10em, -5em)',
    // },
    // '100%': {
    //   transform: 'translate(-1em, -1em) rotate(-15deg)',
    //   // transform: 'rotate(360deg)',
    // },
  },
}))


const Error400 = () => {
  const history = useHistory()
  const classes = useStyles();

  return (
    <PageContainer>
      <section className={classes.container} style={{ filter: 'drop-shadow(2px 3px 3px black)'}}>
        <h1>Looks like you got lost!</h1>
        <img src={error400} className={classes.img} alt='404 error' />
        <h3>Unfortunately, this page doesn't exist.</h3>
        <Button primary onClick={() => history.push("/mission-control")}>Take me back to mission control!</Button>
      </section>
    </PageContainer >
  )
}

export default Error400;