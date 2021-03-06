import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RoundButton from "../../ui/button/RoundButton";
import camera from "../../assets/camera.png";
import ModalMessage from "../../ui/modal/ModalMessage";
import { useAuth0 } from "@auth0/auth0-react";

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
    paddingTop: ".7em",
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
  const [sourceFile, setSourceFile] = useState(null);
  const { user, isAuthenticated } = useAuth0();
  const [alert, setAlert] = useState(true);
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setAlert(false);
    setOpen(!open);
  };

  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        console.log(newUrl);
        setSource(newUrl);
        setSourceFile(file);
      }
    }
  };

  useEffect(() => {
    let updates = {};
    updates.image = sourceFile;
    source ? checkReady(true, updates) : checkReady(false, updates);
  }, [source]);

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

      {alert && (
        <ModalMessage
          open={open}
          title={"Secret Agent Message"}
          message={`Remember, ${
            !isAuthenticated ? "KidDo Agent" : "Agent" + " " + user.given_name
          }, do not take photos of yourself or family. A secret agent must always keep their identity...secret!`}
          handleClose={handleClose}
        />
      )}

      <label htmlFor="icon-button-file">
        <RoundButton>
          <span aria-label="upload picture">
            <img src={camera} className={classes.icon} />
          </span>
        </RoundButton>
      </label>
    </div>
  );
};
export default ImageCapture;
