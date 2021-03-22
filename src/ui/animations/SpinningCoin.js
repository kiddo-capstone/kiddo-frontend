import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { coin } from "../../assets/index";

const useStyles = makeStyles(() => ({
  root: {
    // overflow: "hidden",
  },
  body: {
    WebKitTransform: "perspective(500px)",
    "-webkit-transform-style": "preserve-3d",
  },

  coin: {
    backgroundImage: `${coin.img}`,
    backgroundSize: "100% 100%",
    borderRadius: "100%",
    height: "100px",
    margin: "50px auto",
    position: "relative",
    width: "100px",
    "-webkit-transition": "2s linear",
    "-webkit-transform-style": "preserve-3d",
  },
}));

const SpinningCoin = () => {
  const classes = useStyles();
  const goldCoin = document.getElementById("coin");
  const degrees = 0;
  coin.onclick = () => {
    degrees += 1800;
    console.log(degrees);
    coin.style.WebkitTransform = "rotateY(" + degrees + "deg)";
    coin.style.MozTransform = "rotateY(" + degrees + "deg)";
    coin.style.msTransform = "rotateY(" + degrees + "deg)";
    coin.style.OTransform = "rotateY(" + degrees + "deg)";
    coin.style.transform = "rotateY(" + degrees + "deg)";
  };
  return (
    <div className={classes.coin} id="coin">
      {coin}
    </div>
  );
};

export default React.memo(SpinningCoin);
