import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { coin } from "../../assets/index";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
  },
  coin: {},
  spin: {
    width: "50%",
    height: "60%",
    position: "absolute",
    bottom: "200px",
    animation: "fall 1.5s linear infinite",
    // overflow: "hidden",
    // animation: "fall .63s linear infinite",
    "& img": {
      width: "10%",
      height: "10%",
      animation: "fall 1.5s linear infinite",
    },
  },
  "@keyframes fall": {
    // to: {
    marginTop: "900px",
    // },
  },
}));

const SpinningCoin = () => {};

export default React.memo(SpinningCoin);
