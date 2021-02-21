import React from "react";
import theme from "../../../ui/common/theme";

const Error500 = () => {
  return (
    <section style={{ color: `${theme.colors.white}`, textAlign: "center" }}>
      <h1> Uh oh! Our systems are down. 😖 </h1>
      <h2> Mission Control will be up and running again as soon as possible. </h2>
    </section>
  )
}

export default React.memo(Error500)