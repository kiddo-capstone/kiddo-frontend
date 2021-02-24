import React from "react";
import Button from "../../../ui/button/Button";
import { useHistory } from "react-router-dom";
import theme from "../../../ui/common/theme";
import { PageContainer } from "../../../ui/containers";

const Error400 = () => {
  const history = useHistory()
  return (
    <PageContainer>
      <section style={{color: `${theme.colors.white}`, textAlign: "center"}}>
        <h1>Looks like you got lost!</h1>
        <h3>Unfortunately, this page doesn't exist (yet)</h3>
        <Button onClick={() => history.push("/mission-control")}>Take me back to mission control!</Button>
      </section>
    </PageContainer >
  )
}

export default Error400