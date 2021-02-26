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
    width: '14em'
  },
}))

const Error400 = () => {
  const history = useHistory()
  const classes = useStyles();

  return (
    <PageContainer>
      <section className={classes.container}>
        <h1>Looks like you got lost!</h1>
        <img src={error400} className={classes.img} alt='404 error' />
        <h3>Unfortunately, this page doesn't exist.</h3>
        <Button onClick={() => history.push("/mission-control")}>Take me back to mission control!</Button>
      </section>
    </PageContainer >
  )
}

export default Error400;