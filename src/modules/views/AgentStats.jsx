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
    padding: ".5em 1em",
  },
  taskIcon: {
    borderRadius: "10px",
    maxHeight: "8em",
    maxWidth: "4em",
    filter: "drop-shadow(2px 4px 6px black)",
    paddingRight: "inherit"
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
  }, [])

  const updateStats = async () => {
    const fetchedStats = await getUserStats(state.currentUser.id)
    if (fetchedStats) {
      createStats(fetchedStats)
    }
  }
  
  // const findStatByType = (type) => {
  //   return userStats.find(stat => stat.category === type)
  // }

  const createStats = (stats) => {
    const statsWithIcons = stats.map(stat => {
      if (stat.category === "Brain Training") {
        stat.icon = brainTraining
        return stat
      }
      if (stat.category === "Health Training") {
        stat.icon = healthTraining
      }
      if (stat.category === "Creativity Training") {
        stat.icon = creativityTraining
        return stat
      }
      if (stat.category === "Basic Training") {
        stat.icon = basicTraining
        return stat
      } else {
        stat.icon = brainTraining
        return stat
      }
    })
    return setUserStats(statsWithIcons)
  }

  const displayStats = () => {
  // This was just for development
  //   const stats = [
  //   { icon: brainTraining, barColor: 'gold', completed: 60 },
  //   { icon: creativityTraining, barColor: 'gold', completed: 30 },
  //   { icon: healthTraining, barColor: 'gold', completed: 53 },
  //   { icon: basicTraining, barColor: 'gold', completed: 53 },
  // ];
    const statsDisplayed = userStats
    return statsDisplayed.map(stat => {
      return (
        <div key={stat.category}>
          <span className={classes.statsRow}>
            <img src={stat.icon.img} className={classes.taskIcon}/>
            <ProgressBar 
              barColor={appStyles.colors.yellow} 
              completed={stat.completed_tasks}
              total={10}
            />
          </span>
        </div>
      )
    })
  }

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
          {userStats !== null && (
          <div>
            {displayStats()}
          </div>
          )}
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