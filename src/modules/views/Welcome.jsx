import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import PageContainer from "../../ui/containers/PageContainer";
import { brainTraining, healthTraining, creativityTraining, basicTraining } from "../../assets/index";
import theme from "../../ui/common/theme";
import AppContext from "../App/AppContext";
import { Link } from "react-router-dom";
import UserIndex from "../login/UserIndex";
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
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = (e) => {
    if(e.target.id === "brain") {
      console.log(e.target)
      setOpen(true);
    }
    console.log(e.target)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const categories = {
      brain: {
      id: "brain",
      description: "Our brains are very complex organs that are responsible for everything, from the way we think to the way we move. Training your brain comes with many unique benefits, like improving memory, how quickly you understand things and something called executive functioning. Executive functioning is just a fancy way of saying the skills we use to understand tasks, break them down, and accomplish them step-by-step."
    },
  }
  

  return (
    <PageContainer>
      <section className={classes.welcome}>
        <h1>Welcome to KidDo!</h1>
        <p>As a KidDo agent, it’s your job to complete missions that help you work towards being the best version of yourself. Mission Control is home to all the different missions you can do. Missions are built out of up to four tasks that can earn you points. Each task falls under one of these four categories:</p>
        <div className={classes.taskTypes}>
          <div className={classes.category}>
            <ModalWrapper 
              id={categories.brain.id} 
              open={open} btnMessage={"Brain Training"} 
              handleClose={handleClose}
              handleClickOpen={handleClickOpen}>
            <div onClick={(e) => handleClickOpen(e)}>
              <img className={classes.img} src={brainTraining.img} alt={brainTraining.desc}/>

            </div>
            </ModalWrapper>
            <h3>Brain Training</h3>
            <p className={classes.categoryDesc}>{categories.brain.description}</p>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={creativityTraining.img} alt={creativityTraining.desc}/>
            <h3>Creativity Training</h3>
            <p className={classes.categoryDesc}>When we practice creativity in what we do, it opens the door for self-expression and allows us to solve problems more openly. We can use our personal feelings and experiences to create something different or beautiful. Practicing creativity in our day-to-day lives is so good for us!</p>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={healthTraining.img} alt={healthTraining.desc}/>
            <h3>Health Training</h3>
            <p className={classes.categoryDesc}>There’s a lot more that goes into health than exercising - even though that’s important too! It’s the combination of your physical, emotional and social well-being. We can practice being healthy by eating a well-balanced diet, staying active, and keeping in touch with ourselves and the people we love!</p>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={basicTraining.img} alt={basicTraining.desc}/>
            <h3>Basic Training</h3>
            <p className={classes.categoryDesc}>Growing up comes with a lot of new responsibilities. Responsibility means being dependable, making good choices, and taking accountability for your actions. We can all play a role in looking out for one another and making the world a better place. </p>
          </div>
        </div>
        <div className={classes.rules}>
          <p>
            Depending on the task, you’ll either be asked to write a prompt or submit a picture. Remember, since we’re on the internet, never take pictures of yourself, your family, or anything that might reveal personal information! 
          </p>
          <p>Have fun and stay safe 😎.</p>
        {/* {!state.currentUser ?
        <div className={classes.userLogin}>
          <h3>To get started on your first mission, login or sign up below!</h3>
          <UserIndex />
        </div> :
        <>
          <Link to="mission-control">Take me to mission control!</Link>
        </>
        } */}
        </div>
      </section>
    </PageContainer>
  )
}

export default React.memo(Welcome);