import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RoundButton from "../../ui/button/RoundButton";

const useStyles = makeStyles(() => ({
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
    marginRight: "2em",
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "center",
    border: 1,
  },
  img: {
    height: "inherit",
    maxWidth: "inherit",
    paddingBottom: "30px",
  },
  input: {
    display: "none",
  },
  icon: {
    margin: "auto",
    position: "relative",
    width: "65%",
    height: "65%",
    paddingTop: "20px",
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
        <div className={classes.icon}>
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
          <span aria-label="upload picture">📸</span>
        </RoundButton>
      </label>
    </div>
  );
};
export default ImageCapture;
