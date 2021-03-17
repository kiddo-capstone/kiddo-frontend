import React, { useEffect, useState, useContext } from "react";
import { getUserStats } from "../common/apiCalls";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { makeStyles } from "@material-ui/core";
import AppContext from "../App/AppContext";
import theme from "../../ui/common/theme";
import Button from "../../ui/button/Button";
import { basicTraining, creativityTraining, healthTraining, brainTraining } from "../../assets/index";
import ProgressBar from "../../ui/dataVisuals/ProgressBar";

const appStyles = theme

const useStyles = makeStyles(() => ({
  modalContent: {
    textAlign: "center",
    overflow: "hidden",
    width: "20em",
    maxWidth: "100%"
  },
  statBox : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 2em",
  },
  statsRow: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 2em",
  },
  taskIcon: {
    borderRadius: "10px",
    maxHeight: "10vh",
    maxWidth: "5vw",
    filter: "drop-shadow(2px 4px 6px black)",
  },
  button: {
    paddingTop: "10em"
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
  

  useEffect(() => {
    updateStats()
  }, [state.currentUser])

  const updateStats = () => {
     getUserStats(+1).then(data => console.log(data))
  }

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
          <span className={classes.statsRow}>
            <img src={stat.icon.img} className={classes.taskIcon}/>
            <ProgressBar 
              barColor={appStyles.colors.yellow} 
              completed={50}
            />
          </span>
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
      btnMessage={<h2 className={classes.animate} style={{color: appStyles.colors.blue}}>Agent Stats!</h2>}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose} 
      open={open}
      >
        <section className={classes.modalContent}>
          <h2>Agent Stats</h2>
          <div>
            {displayStats()}
          </div>
          <span className={classes.button}>
            <Button onClick={handleClose}>
              Got it!
            </Button>
          </span>
        </section>
    </ModalWrapper>
  )
}

export default React.memo(AgentStats);