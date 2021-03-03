import React from "react";
import { makeStyles } from "@material-ui/core";
import PageContainer from "../../ui/containers/PageContainer";
import LoginForm from "../login/LoginForm";
import { brainTraining, healthTraining, creativityTraining, basicTraining } from "../../assets/index";



const useStyles = makeStyles(() => ({
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
  img: {
    // background: "white",
    // borderRadius: "50%",
    // opacity: "0.4",
    width: "10em",
    height: "10em",
    objectFit: "contain",
  }
}))

const Welcome = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <section>
        <h1>Welcome to KidDo!</h1>
        <p>
          As a KidDo agent, it’s your job to complete missions that help you work towards being the best version of yourself. Mission Control is home to all the different missions you can do. Missions are built out of up to four tasks. Each task falls under one of these four categories:
        </p>
        <div className={classes.taskTypes}>
          <div className={classes.category}>
            <img className={classes.img} src={brainTraining.img} alt={brainTraining.desc}/>
            <h2>Brain Training</h2>
            <p>You may have heard that our brains are a muscle, but that’s not actually the case. Our brains are actually very complex organs that are responsible for everything, from the way we think to the way we move. Training your brain comes with many unique benefits, like improving memory, how quickly you understand things and something called executive functioning. Executive functioning is just a fancy way of saying the skills we use to understand tasks, break them down, and accomplish them step-by-step.</p>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={creativityTraining.img} alt={creativityTraining.desc}/>
            <h5>Creativity Training</h5>
            <p>When we practice creativity in what we do, it opens the door for self-expression and allows us to solve problems more openly. We can use our personal feelings and experiences to create something different or beautiful. Practicing creativity in our day-to-day lives is so good for us!</p>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={healthTraining.img} alt={healthTraining.desc}/>
            <h5>Health Training</h5>
            <p>Health</p>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={basicTraining.img} alt={basicTraining.desc}/>
            <h5>Basic Training</h5>
            <p>Basic</p>
          </div>
        </div>
        <div>
          <LoginForm />
        </div>
      </section>
    </PageContainer>
  )
}

export default React.memo(Welcome);