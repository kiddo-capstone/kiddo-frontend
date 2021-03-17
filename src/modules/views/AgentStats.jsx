import React, { useEffect, useState, useContext } from "react";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { makeStyles } from "@material-ui/core";
import AppContext from "../App/AppContext";
import Button from "../../ui/button/Button";
import { basicTraining, creativityTraining, healthTraining, brainTraining } from "../../assets/index";
import ProgressBar from "../../ui/dataVisuals/ProgressBar";

const useStyles = makeStyles(() => ({
  modalContent: {
    textAlign: "center",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    // flexWrap: "wrap",
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

const AgentStats = () => {
  const [state, dispatch] = useContext(AppContext);
  const [userStats, setUserStats] = useState(null)
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  // const stats = [
  //   { icon: brainTraining, barColor: 'gold', completed: 60 },
  //   { icon: creativityTraining, barColor: 'gold', completed: 30 },
  //   { icon: healthTraining, barColor: 'gold', completed: 53 },
  //   { icon: basicTraining, barColor: 'gold', completed: 53 },
  // ];

  const displayStats = () => {
    const stats = [
    { icon: brainTraining, barColor: 'gold', completed: 60 },
    { icon: creativityTraining, barColor: 'gold', completed: 30 },
    { icon: healthTraining, barColor: 'gold', completed: 53 },
    { icon: basicTraining, barColor: 'gold', completed: 53 },
  ];
    // setUserStats(stats)
    return stats.map(stat => {
      return (
        <div>
        <img src={stat.icon.img}/>
        </div>
      )
    })
  }
  // useEffect(() => {}, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <ModalWrapper 
      // submitFunc={handleSubmit} 
      btnMessage={<h2 className={classes.animate} style={{fontSize:'2em', lineHeight: 0}}>Agent Stats!</h2>}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose} 
      open={open}
      >
        <section className={classes.modalContent}>
          <h2>Agent Stats</h2>
          <div className={classes.container}>
           {displayStats()}
          </div>
        
          <Button onClick={handleClose}>
            Cool! I'm Done
          </Button>
        </section>
    </ModalWrapper>
  )
}

export default React.memo(AgentStats);