import React, { useEffect, useState, useContext } from "react";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { makeStyles } from "@material-ui/core";
import AppContext from "../App/AppContext";
import Button from "../../ui/button/Button";

const useStyles = makeStyles(() => ({
  modalContent: {
    textAlign: "center",
    overflow: "hidden",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    padding: "0.5em",
    fontSize: "2em",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.4)",
      transitionDuration: "0.4s",
    },
  },
  input: {
    display: "none",
    "&:checked": {
      background: "red",
    },
  },
  labelChecked: {
    padding: "0.5em",
    fontSize: "2em",
    transform: "scale(1.4)",
  }
}))

const StatusForm = () => {
  const [state, dispatch] = useContext(AppContext);
  const [status, setStatus] = useState(null)
  const [emotions, setEmotions] = useState(['😊', '🥺', '😤', '🙂', '🤨', '🥳', '🥴', '😅', '😠', '🙄', '😭', '😢', '😟', '😁', '🥱', '😳', '🤪', '😡', '😖', '😰', '😧'])
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("closed!");
  };
  useEffect(() => {}, [status])
  
  const determineEmotion = (emoji) => {
    let emotion;
    if (emoji === '😊' || emoji === '🙂' || emoji === '😁' || emoji === '🥳' || emoji === '🤪') {
      emotion = "joy";
    } else if (emoji === '😢' || emoji === '🥺' || emoji === '😭' || emoji === '😖') {
      emotion = "sadness";
    } else if (emoji === '😧' || emoji === '😰' || emoji === '😟' || emoji === '😅') {
      emotion = "fear";
    } else if (emoji === '😡' || emoji === '🤨' || emoji === '😤' || emoji === '😠') {
      emotion = "anger";
    } else if (emoji === '🥴' || emoji === '🥱' || emoji === '😳' || emoji === '🙄') {
      emotion = "disgust";
    }
    return emotion
  }

  const createInputs = () => {
    return emotions.map(emotion => {
      const labelClass = emotion === status ? classes.labelChecked : classes.label
      return (
        <label className={labelClass} htmlFor={emotion} key={emotion}>
          { emotion }
          <input
            className={classes.input}
            type="radio"
            name="status"
            id={ emotion }
            value={ emotion }
            onClick={(e) => setStatus(e.target.value)}
          /> 
        </label>
      )
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const action = { 
      type: "SET_STATUS", 
      status: {
        emotion: determineEmotion(status),
        emoji: status 
      }
    }
    dispatch(action)
    handleClose()
    // how can we close the modal after submit?
  }
  
  return (
    <ModalWrapper 
      submitFunc={handleSubmit} 
      btnMessage={<h3>{state.status ? state.status.emoji : "?"}</h3>} handleClickOpen={handleClickOpen} 
      handleClose={handleClose} 
      open={open}
      >
        <section className={classes.modalContent}>
          <h2>Agent Status Update</h2>
          <form className={classes.form}>
            { createInputs() }
          </form>
          {status && 
          <Button onClick={(e) => handleSubmit(e)}>
            SUBMIT
          </Button>}
        </section>
    </ModalWrapper>
  )
}

export default React.memo(StatusForm);
