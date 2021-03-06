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
  },
  animate: {
    willChange: 'transform',
    animation: '$pulse infinite ease 5s',
    filter: 'drop-shadow(1px 2px 2px black)',
    transformOrigin: 'center',
  },
  animate2: {
    willChange: 'transform',
    animation: '$pulse2 infinite ease 8s',
    filter: 'drop-shadow(1px 2px 2px black)',
    transformOrigin: 'right',
    transform: 'scale(1.3)',
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'translate(0em, 0em)',
    },
    '50%': {
      transform: 'translate(0em, -.3em) scale(1.5)',
      filter: 'drop-shadow(1px 3px 3px black)',
    },
    '100%': {
      transform: 'translate(0em, 0em)',
    },
  },
  '@keyframes pulse2': {
    '0%': {
    transform: 'rotate(-25deg) scale(1.3)',
    },
    '50%': {
      transform: 'rotate(25deg) scale(1.3)',
      filter: 'drop-shadow(1px 3px 3px black)',
    },
    '100%': {
      transform: 'rotate(-25deg) scale(1.3)',
    },
  },
}))

const StatusForm = () => {
  const [state, dispatch] = useContext(AppContext);
  const [status, setStatus] = useState(null)
  const [emotions, setEmotions] = useState(['😊', '🥺', '😤', '🙂', '🤨', '🥳', '🥴', '😅', '😠', '🙄', '😭', '😢', '😟', '😁', '🥱', '😳', '🤪', '😡', '😖', '😰', '😧'])
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  useEffect(() => {}, [status])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
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
  }
  
  return (
    <ModalWrapper 
      submitFunc={handleSubmit} 
      btnMessage={state.status ? <h2 className={classes.animate2} style={{fontSize:'2em', lineHeight: 0}}>{state.status.emoji}</h2> : <h2 className={classes.animate} style={{fontSize:'2em', lineHeight: 0}}>?</h2>} handleClickOpen={handleClickOpen} 
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
