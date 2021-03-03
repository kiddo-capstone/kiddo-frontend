import React, { useContext, useState, useEffect } from "react";
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import { useAuth0 } from "@auth0/auth0-react";
import StatusForm from "./StatusForm";
import SignUp from "../login/SignUp.js";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { basicTraining, creativityTraining, healthTraining, brainTraining } from "../../assets/index";
import { Link } from "react-router-dom";
import RoundButton from "../../ui/button/RoundButton";

const appStyles = theme;

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceAround",
  },
  card: {
    height: "auto",
    overflow: "hidden",
    backgroundPosition: 'center',
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "20px",
    height: "30%",
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
    color: 'gold',
  },
  avatar: {
    filter: 'drop-shadow(2px 4px 6px black)',
    backgroundImage: 'linear-gradient(359deg, #e4572e9e, #00e7ff47)',
    margin: "auto",
    position: "relative",
    width: "220px",
    height: "200px",
    borderRadius: "50%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    },
  },
  icon: {
    margin: "0.6em",
    height: "3.5em",
    alignItems: "flex-start",
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  detailsChild: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 1em",
    color: appStyles.colors.white,
    "& h2:nth-child(1)": {
      color: appStyles.colors.yellow,
    },
  },
  statRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  "🥸": {
    display: "flex",
    flexDirection: "column",
    color: "white",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0.6em 1.5em",
    "& h2:nth-child(1)": {
      color: appStyles.colors.white,
    },
  }
}));

const AgentDetails = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  const { user, isAuthenticated } = useAuth0();

  const stats = [
    { icon: brainTraining, barColor: 'gold', completed: 60 },
    { icon: creativityTraining, barColor: 'gold', completed: 30 },
    { icon: healthTraining, barColor: 'gold', completed: 53 },
    { icon: basicTraining, barColor: 'gold', completed: 53 },
  ];

  const returnTaskCategoryLength = (category) => {
    if (state.tasks.length > 0) {
      return state.tasks.filter(task => {
        return task.attributes.category === category
      }).length
    }
  }
  
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.avatar}>
            <img src={kids} />
          </div>
      
          <span className={classes.titleText}>
            <h1>{state.currentUser !== null ? state.currentUser.attributes.name : 'KidDo Agent'}</h1> 
          </span>

          <hr />
          <div className={classes.details}>
            <div className={classes.detailsChild}>
              <h2>Date:</h2>
              <h3>{ new Date().toLocaleDateString() }</h3>
            </div>
             {state.currentUser !== null && (
            <div className={classes.detailsChild}>
              <h2>Points:</h2>
              <h3>{state.currentUser.attributes.points}</h3>
            </div>
             )}
            <div className={classes.detailsChild}>
              <h2>Agent Status:</h2>
                <StatusForm />
            </div>
          </div>
        </div>
      </div>
      {/* {state.currentUser !== null && (
      <div>
        {stats.map((item, idx) => (
          <div className={classes.statRow} key={`statRow-${idx}`}>
            <img src={item.icon.img} className={classes.icon} key={`icon-${idx}`}/>
            <p>0/{returnTaskCategoryLength(item.icon.desc)}</p>
          </div>
        ))}
      </div>
      )} */}
      <div className={classes["🥸"]}>
        <Link to="/welcome"><h2>Welcome</h2></Link>
        <Link to="/mission-control"><h2>Mission Control</h2></Link>
      </div>
    </section>
  );
};

export default React.memo(AgentDetails);
