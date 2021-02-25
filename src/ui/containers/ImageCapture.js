import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SmallContainer from "./SmallContainer";
import RoundButton from "../button/RoundButton 2";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    textAlign: "center",
  },
  imgBox: {
    maxWidth: "80%",
    maxHeight: "80%",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    border: 1,
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
  },
  input: {
    display: "none",
  },
}));
const ImageCapture = () => {
  const classes = useStyles();
  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        console.log(newUrl);
        setSource(newUrl);
      }
    }
  };
  return (
    // <div className={classes.root}>
    <SmallContainer>
      <h4>Capture Photo Evidence</h4>
      {source && (
        <div className={classes.imgBox}>
          <img src={source} alt={"snap"} className={classes.img}></img>
        </div>
      )}
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
        capture="environment"
        onChange={(e) => handleCapture(e.target)}
      />
      <label htmlFor="icon-button-file">
        <RoundButton>
          <span color="primary" aria-label="upload picture" component="span">
            📸
          </span>
        </RoundButton>
      </label>
    </SmallContainer>
    // </div>
  );
};
export default ImageCapture;
