import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SmallContainer from "./SmallContainer";
import RoundButton from "../button/RoundButton 2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
  imgBox: {
    // maxWidth: "80%",
    // maxHeight: "80%",
    margin: "10px",
    paddingBottom: "10px",
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
  avatar: {
    margin: "auto",
    position: "relative",
    width: "70%",
    height: "70%",
    // borderRadius: "50%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));
const ImageCapture = () => {
  const classes = useStyles();
  const [source, setSource] = useState("");

  const handleCapture = (target) => {
    if (target.files) {
      console.log(target.files);
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        console.log(newUrl);
        setSource(newUrl);
        // Make image POST request (newUrl)
      }
    }
  };
  return (
    <div className={classes.root}>
      <h5>Capture Photo Evidence</h5>
      {source && (
        <div className={classes.avatar}>
          <img src={source} alt={"snap"} className={classes.img} />
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
    </div>
  );
};
export default ImageCapture;
