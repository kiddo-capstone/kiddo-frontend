import React, { useEffect, useState, useContext } from "react";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { makeStyles } from "@material-ui/core";
import AppContext from "../app/AppContext";
import Button from "../../ui/button/Button";

const useStyles = makeStyles(() => ({
  modalContent: {
    height: "auto",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
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
    animation: "pulse 2s infinite",
  }
}))

const StatusForm = () => {
  const [state, dispatch] = useContext(AppContext);
  const [status, setStatus] = useState(null)
  const [emotions, setEmotions] = useState(['😊', '🥺', '😤', '🙂', '🤨', '🥳', '🥴', '🤢', '😠', '🙄', '😭', '😢', '😟', '😁', '🥱', '😳', '🤪', '😡', '😖', '😰', '😧'])
  const classes = useStyles();

  useEffect(() => {
    console.log(status)
  }, [status])
  
  const determineEmotion = (emoji) => {
    let emotion;
    if (emoji === '😊' || emoji === '🙂' || emoji === '😁' || emoji === '🥳' || emoji === '🤪') {
      emotion = "joy";
    } else if (emoji === '😢' || emoji === '🥺' || emoji === '😭' || emoji === '😖') {
      emotion = "sadness";
    } else if (emoji === '😧' || emoji === '😰' || emoji === '😟' || emoji === '😖') {
      emotion = "fear";
    } else if (emoji === '😡' || emoji === '🤨' || emoji === '😤' || emoji === '😠') {
      emotion = "anger";
    } else if (emoji === '🥴' || emoji === '🥱' || emoji === '😳' || emoji === '🤢' || emoji === '🙄') {
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
            onClick={(e) => handleSelect(e)}
          /> 
        </label>
      )
    })
  }

  const handleSelect = (e) => {
    setStatus(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const action = { 
      type: "SET_STATUS", 
      status: {
        emotion: determineEmotion(status),
        status: status 
      }
    }
    dispatch(action)
  }
  
  return (
    <ModalWrapper btnMessage=' ? '>
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

export default StatusForm;