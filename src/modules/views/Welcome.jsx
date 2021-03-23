import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { PageContainer, TitleContainer } from "../../ui/containers";
import { brainTraining, healthTraining, creativityTraining, basicTraining } from "../../assets/index";
import theme from "../../ui/common/theme";
import AppContext from "../App/AppContext";
import ModalWrapper from "../../ui/modal/ModalWrapper";

const useStyles = makeStyles(() => ({
  welcome: {
    margin: "0 5%",
  },
  taskTypes: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  category: {
    margin: "5%",
    "& h2": {
      fontSize: "26px"
    }
  },
  categoryDesc: {
    fontSize: "0.8em",
    margin: "5%",
  },
  img: {
    width: "10em",
    height: "10em",
    objectFit: "contain",
  },
  rules: {
    background: theme.colors.darkGrey,
    padding: "1.5em",
    marginBottom: "10%",
  },
  userLogin: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.fonts.secondary,
  },
  toggleSignup: {
    padding: "1.5%",
    margin: "1%",
    fontFamily: theme.fonts.tertiary,
  }
}))

const Welcome = () => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  const [signup, setSignup] = useState(true);
  const [openBrain, setOpenBrain] = useState(false);
  const [openCreativity, setOpenCreativity] = useState(false);
  const [openHealth, setOpenHealth] = useState(false);
  const [openBasic, setOpenBasic] = useState(false);
  const [type, setType] = useState("");

  const handleClickOpen = (e, id) => {
    if (e.target.id === "brain") {
      setOpenBrain(true)
    }
    if (e.target.id === "creativity") {
        setOpenCreativity(true)
      }
    if (e.target.id === "health") {
      setOpenHealth(true)
    }
    if (e.target.id === "basic") {
      setOpenBasic(true)
    }
    console.log("id:", e.target.id, "type:", type)
  };

  const handleClose = () => {
    setOpenBrain(false);
    setOpenCreativity(false);
    setOpenHealth(false);
    setOpenBasic(false);
  };

  const categories = {
    brain: {
      id: "brain",
      description: "Our brains are very complex organs that are responsible for everything, from the way we think to the way we move. Training your brain comes with many unique benefits, like improving memory, how quickly you understand things and something called executive functioning. Executive functioning is just a fancy way of saying the skills we use to understand tasks, break them down, and accomplish them step-by-step."
    },
    creativity: {
      id: "creativity",
      description: "When we practice creativity in what we do, it opens the door for self-expression and allows us to solve problems more openly. We can use our personal feelings and experiences to create something different or beautiful. Practicing creativity in our day-to-day lives is so good for us!"
    },
    health: {
      id: "health",
      description: "There’s a lot more that goes into health than exercising - even though that’s important too! It’s the combination of your physical, emotional and social well-being. We can practice being healthy by eating a well-balanced diet, staying active, and keeping in touch with ourselves and the people we love!"
    },
    basic: {
      id: "basic",
      description: "Growing up comes with a lot of new responsibilities. Responsibility means being dependable, making good choices, and taking accountability for your actions. We can all play a role in looking out for one another and making the world a better place."
    }
  }
  

  return (
    <PageContainer>
      <section className={classes.welcome}>
        <TitleContainer>
          <h1>Welcome to KidDo!</h1>
        </TitleContainer>
        <p>As a KidDo agent, it’s your job to complete missions that help you work towards being the best version of yourself. Mission Control is home to all the different missions you can do. Missions are built out of up to four tasks that can earn you points. Each task falls under one of these four categories:</p>
        <div className={classes.taskTypes}>
          <div className={classes.category}>
            <h2>Brain Training</h2>

            <ModalWrapper 
              id={categories.brain.id} 
              open={openBrain} 
              btnMessage={<img id={categories.brain.id} className={classes.img} src={brainTraining.img} alt={brainTraining.desc}/>} 
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              >
              <div aria-label="click to open brain training description" onClick={(e) => handleClickOpen(e)}>
                <p className={classes.categoryDesc}>{categories.brain.description}</p>
              </div>
            </ModalWrapper>
          </div>
          
          <div className={classes.category}>
            <h2>Creativity Training</h2>
            <ModalWrapper 
              id={categories.creativity.id} 
              open={openCreativity} 
              btnMessage={<img id={categories.creativity.id} className={classes.img} src={creativityTraining.img} alt={creativityTraining.desc}/>} 
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              >
              <div onClick={(e) => handleClickOpen(e)} aria-label="click to open creativity training description">
                <p className={classes.categoryDesc}>{categories.creativity.description}</p>
              </div>
            </ModalWrapper>
          </div>

           <div className={classes.category}>
            <h2>Health Training</h2>
            <ModalWrapper 
              id={categories.health.id} 
              open={openHealth} 
              btnMessage={<img id={categories.health.id} className={classes.img} src={healthTraining.img} alt={healthTraining.desc}/>} 
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              >
              <div onClick={(e) => handleClickOpen(e)} aria-label="click to open health training description">
                <p className={classes.categoryDesc}>{categories.health.description}</p>
              </div>
            </ModalWrapper>
          </div>
            
          <div className={classes.category}>
            <h2>Basic Training</h2>
            <ModalWrapper 
              id={categories.basic.id} 
              open={openBasic} 
              btnMessage={<img id={categories.basic.id} className={classes.img} src={basicTraining.img} alt={basicTraining.desc}/>} 
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}
              >
              <div onClick={(e) => handleClickOpen(e)} aria-label="click to open basic training description">
                <p className={classes.categoryDesc}>{categories.basic.description}</p>
              </div>
            </ModalWrapper>
          </div>
        </div>
        <div className={classes.rules}>
          <p>
            Depending on the task, you’ll either be asked to write a prompt or submit a picture. Remember, since we’re on the internet, never take pictures of yourself, your family, or anything that might reveal personal information! 
          </p>
          <p>Have fun and stay safe 😎.</p>
        </div>
      </section>
    </PageContainer>
  )
}

export default React.memo(Welcome);