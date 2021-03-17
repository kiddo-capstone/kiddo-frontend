import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { coin } from "../../assets/index";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    width: "100%",
    position: "absolute",
  },
  drop: {
    // width: "80%",
    overflow: "hidden",
    "& img": {
      position: "absolute",
      // animation: "fall 1.5s linear infinite",
      overflow: "hidden",
      width: "30%",
      height: "15%",
      animation: "$fall 5s linear",
    },
  },
  "@keyframes fall": {
    to: {
      marginTop: "900px",
    },
    // "0%": {
    //   transform: "translate(0em, 0em) rotate(50deg)",
    // },

    // "50%": {
    //   transform: "translate(0em, 0em) rotate(-50deg)",
    // },
    "100%": {
      transform: "rotate(50deg)",
    },
  },
}));

const GoldCoinRain = ({ isRaining }) => {
  const classes = useStyles();
  const numDrop = 200;

  useEffect(() => {
    // if (isRaining === true) {
    // setTimeout(() => makeItRain(), 650);
    console.log("yes", isRaining);
    makeItRain();
    // }
    // if (isRaining === false) {
    // console.log("no", isRaining);
    // makeItStop();
    // }
  }, []);

  const randRange = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  const makeItRain = () => {
    const rainSection = document.getElementById("Rain");
    console.log(rainSection);

    // rainSection.style.display = "block";

    for (let i = 1; i < numDrop; i++) {
      let dropLeft = randRange(0, 1600);
      let dropTop = randRange(-1000, 1400);

      let rotate = randRange(-360, 360);

      let coinDrop = document.createElement("img");
      coinDrop.setAttribute("class", `${classes.drop}`);
      coinDrop.setAttribute("id", `drop${i}`);
      coinDrop.setAttribute("src", `${coin.img}`);
      coinDrop.setAttribute("alt", `${coin.desc}`);

      rainSection.appendChild(coinDrop);
      coinDrop.style.left = `${dropLeft}px`;
      coinDrop.style.top = `${dropTop}px`;
      coinDrop.style.transform = `translate(-8em, 0) rotate(${rotate}deg)`;
      // coinDrop.style.transform = `translate(3em, 0em) rotate(${transformRight}deg)`;
    }
  };

  const makeItStop = () => {
    const rainSection = document.getElementById("Rain");

    // while (rainSection.hasChildNodes()) {
    //   rainSection.removeChild(rainSection.lastChild);
    // }
    rainSection.style.display = "none";
    console.log("makeItStop: removed child node");
  };

  return <div id={"Rain"} className={classes.drop}></div>;
};

export default React.memo(GoldCoinRain);
