import React, { useEffect, useState, useContext } from "react";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { makeStyles } from "@material-ui/core";
import AppContext from "../app/AppContext";

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
      transform: "scale(1.2)",
      transitionDuration: "0.4s",
    },
  },
  input: {
    display: "none",
    "&:checked": {
      background: "red",
    },
  },
  checked: {
    background: "red",
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
      emotion = 'joy';
    } else if (emoji === '😢' || emoji === '🥺' || emoji === '😭' || emoji === '😖') {
      emotion = 'sadness';
    } else if (emoji === '😧' || emoji === '😰' || emoji === '😟' || emoji === '😖') {
      emotion = 'fear';
    } else if (emoji === '😡' || emoji === '🤨' || emoji === '😤' || emoji === '😠') {
      emotion = 'anger';
    } else if (emoji === '🥴' || emoji === '🥱' || emoji === '😳' || emoji === '🤢' || emoji === '🙄') {
      emotion = 'disgust';
    }
    return emotion
  }

  const createInputs = () => {
    return emotions.map(emotion => {
      return (
        <label className={classes.label} htmlFor={emotion} key={emotion}>
          { emotion }
          <input
            className={classes.input}
            type="radio"
            name="status"
            id={ emotion }
            value={ determineEmotion(emotion) }
            onClick={(e) => handleSelect(e)}
          /> 
        </label>
      )
    })
  }

  const handleSelect = (e) => {
    console.log(e)
    setStatus(e.target.value)
    const action = { type: `SET_STATUS`, status: status }
    console.log(action)
    dispatch(action)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const action = { type: `SET_STATUS`, status: status }
  //   console.log(action)
  //   dispatch(action)
  // }
  
  return (
    <ModalWrapper btnMessage=' ? '>
      <section className={classes.modalContent}>
      <h2>Agent Status Update</h2>
      <form className={classes.form}>
        { createInputs() }
      </form>
      </section>
    </ModalWrapper>
  )
}

export default StatusForm;