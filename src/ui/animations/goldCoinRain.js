import React from "react";
import { makeStyles } from "@material-ui/core";
import coin from "../../assets/gold_coin.png";

const useStyles = makeStyles((props) => ({
  coinImg: {},
}));

const GoldCoinRain = () => {
  const classes = useStyles();
  return (
    <section>
      <img className={classes.coinImg} src={coin} />
    </section>
  );
};

export default React.memo(GoldCoinRain);
