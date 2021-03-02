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
    animation: '$ufo infinite ease 4s',
  },
  '@keyframes ufo': {
    '0%': {
      transform: 'translate(-3em, 0em) rotate(10deg)',
    },

    '50%': {
      transform: 'translate(3em, 0em) rotate(-10deg)',
    },
    '100%': {
      transform: 'translate(-3em, 0em) rotate(10deg)',
    },
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