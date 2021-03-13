import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import coin from "../../assets/gold_coin.png";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },

  drop: {
    width: "50%",
    height: "60%",
    position: "absolute",
    bottom: "200px",
    animation: "fall 1.5s linear infinite",
    // animation: "fall .63s linear infinite",
  },
  "@keyframes fall": {
    to: {
      marginTop: "900px",
    },
  },
}));

const GoldCoinRain = () => {
  const classes = useStyles();
  const numDrop = 150;

  const [isRaining, setIsRaining] = useState(true);

  useEffect(() => {
    makeItRain();
  }, []);

  const randRange = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  };

  const makeItRain = () => {
    for (let i = 1; i < nbLeft; i++) {
      let dropLeft = randRange(0, 1600);
      let dropTop = randRange(-1000, 1400);
      const drop = document.createElement("div");

      drop.setAttribute("class", "drop");
      drop.setAttribute("id", `drop${i}`);

      rainSection.appendChild(drop);

      drop.style.left = `${dropLeft}px`;
      drop.style.top = `${dropTop}px`;
    }
  };

  return (
    <section className={classes.rain}>
      <img className={classes.drop} src={coin.image} alt={coin.desc} />
    </section>
  );
};

export default React.memo(GoldCoinRain);
