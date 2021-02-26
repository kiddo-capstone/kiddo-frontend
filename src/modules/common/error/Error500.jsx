import React, { Component } from "react";
import theme from "../../../ui/common/theme";
import { PageContainer } from "../../../ui/containers";
import serverDown from "../../../assets/servers-down.png";

const Error500 = () => {
  return (
      <section style={{ color: `${theme.colors.white}`, textAlign: "center" }}>
        <h1> Uh oh! Our systems are down. 😖 </h1>
        <h2> Mission Control will be up and running again as soon as possible. </h2>
        <img src={serverDown} style={{width: '60%'}} alt="all servers down"/>
      </section>
  )
}

export default React.memo(Error500)