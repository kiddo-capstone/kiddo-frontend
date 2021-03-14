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
    width: "100%",
    // position: "absolute",
    overflow: "hidden",
    "& img": {
      position: "absolute",
      // width: "100%",
      // animation: "fall 1.5s linear infinite",
      overflow: "hidden",
      width: "35%",
      height: "20%",
      animation: "$fall 2.5s linear ",
    },
  },
  "@keyframes fall": {
    to: {
      marginTop: "900px",
    },
  },
}));

const GoldCoinRain = () => {
  const classes = useStyles();
  const numDrop = 100;

  const [isRaining, setIsRaining] = useState(true);

  useEffect(() => {
    if (isRaining) {
      makeItRain();
    } else {
      makeItStop();
    }
  }, [isRaining]);

  const randRange = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  const makeItRain = () => {
    const rainSection = document.getElementById("Rain");
    console.log(rainSection);

    for (let i = 1; i < numDrop; i++) {
      let dropLeft = randRange(0, 1600);
      let dropTop = randRange(-1000, 1400);

      let coinDrop = document.createElement("img");
      coinDrop.setAttribute("class", `${classes.drop}`);
      coinDrop.setAttribute("id", `drop${i}`);
      coinDrop.setAttribute("src", `${coin.img}`);
      coinDrop.setAttribute("alt", `${coin.desc}`);

      rainSection.appendChild(coinDrop);
      // drop = (
      //   <div className={classes.drop} id={`drop${i}`}>
      //     <img className={classes.drop} src={coin.img} />
      //   </div>
      // );
      coinDrop.style.left = `${dropLeft}px`;
      coinDrop.style.top = `${dropTop}px`;
    }
  };

  const makeItStop = () => {
    const rainSection = document.getElementById("Rain");

    while (rainSection.hasChildNodes()) {
      rainSection.removeChild(rainSection.lastChild);
    }
  };

  return <div id={"Rain"} className={classes.drop}></div>;
};

export default React.memo(GoldCoinRain);
