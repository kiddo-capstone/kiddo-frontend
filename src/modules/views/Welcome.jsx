import React from "react";
import { makeStyles } from "@material-ui/core";
import PageContainer from "../../ui/containers/PageContainer";
import intelligence from "../../assets/intelligence.png";
import accomplishment from "../../assets/accomplishment.png";
import creativity from "../../assets/creativity.png";
import activity from "../../assets/activity.png";
import SignUp from "../login/SignUp.js";

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
        <h1>What's in a mission?</h1>
        <p>A mission can have up to four tasks, <br /> which could fall under any of the following categories:</p>
        <div className={classes.taskTypes}>
          <div className={classes.category}>
            <img className={classes.img} src={intelligence} />
            <h5>Brain Training</h5>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={creativity} />
            <h5>Creativity Training</h5>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={activity} />
            <h5>Health Training</h5>
          </div>
          <div className={classes.category}>
            <img className={classes.img} src={accomplishment} />
            <h5>Basic Training</h5>
          </div>
        </div>
      </section>
    </PageContainer>
  )
}

export default React.memo(Welcome);