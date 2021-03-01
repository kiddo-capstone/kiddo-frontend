import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RoundButton from "../../ui/button/RoundButton";
import camera from "../../assets/camera.png";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    padding: "1em",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },
  box: {
    fontSize: "1em",
    width: "100%",
    border: "none",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "rgb(40,44,52, .5)",
    outline: "none",
    color: "blanchedalmond",
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
    width: "80%",
    height: "80%",
    paddingTop: "20px",
    // borderRadius: "50%",
    // overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));
const ImageCapture = ({ checkReady }) => {
  const classes = useStyles();
  const [source, setSource] = useState("");
  const [sourceFile, setSourceFile] = useState({});

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
        setSourceFile(file);

        console.log("newUrl", newUrl);
        console.log("file: :", file);
      }
    }
  };

  useEffect(() => {
    let updates = {};
    let formData = new FormData();
    formData.append("image", source);
    // updates.image = sourceFile;
    console.log("SOURCEFILE", source);
    console.log("UPDATES", formData);
    source ? checkReady(true, formData) : checkReady(false, formData);
  }, [source]);

  return (
    <div className={classes.root}>
      <h5>Capture Photo Evidence</h5>
      {source && (
        <div className={classes.icon}>
          <img src={source} alt={"snap"} className={classes.img} />
        </div>
      )}
      <form onSubmit={handleCapture}>
        <label htmlFor="image">
          <input
            name="image"
            accept="image/*"
            className={classes.input}
            id="image"
            type="file"
            capture="environment"
            onChange={(e) => handleCapture(e.target)}
          />
        </label>
        <label htmlFor="image">
          <RoundButton>
            <span aria-label="upload picture">
              <img src={camera} className={classes.icon} />
            </span>
          </RoundButton>
        </label>
      </form>
    </div>
  );
};
export default ImageCapture;
