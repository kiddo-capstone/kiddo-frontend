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
        <h3>As a KidDo agent, it’s your job to complete missions <br/> that help you work towards being the best version of yourself. </h3>
        <p>A mission is made up of up to four tasks. When you click start</p>
        <p></p>
        <div className={classes.taskTypes}>
          <div className={classes.category}>
            <img className={classes.img} src={brainTraining.img} alt={brainTraining.desc}/>
            <h5>Brain Training</h5>
            <p>Your brain</p>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={creativityTraining.img} alt={creativityTraining.desc}/>
            <h5>Creativity Training</h5>
            <p>Creativity</p>
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