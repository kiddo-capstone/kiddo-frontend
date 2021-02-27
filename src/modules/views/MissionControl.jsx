import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import {PageContainer, TitleContainer, SmallContainer, MediumContainer} from "../../ui/containers/index";
import Button from "../../ui/button/Button";
import Mission from '../mission/Mission'
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core'
import AccentLine from '../../ui/decorative/AccentLine'

const useStyles = makeStyles(theme => ({
  missions: {
    justifyContent: 'space-between',
    height: '90%',
    minWidth: '750px',
    width: '90%',
    textAlign: "center",
    borderRadius: '5px',
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    padding: '1.5em .5em',
    // background: "none",
    // backgroundColor: "#282c34",
    [theme.breakpoints.down('600')]: {
      minWidth: '20px',
    },
  },
}))

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext);
  const { colors, shadows, gradients, fonts } = state.theme;
  
  const classes = useStyles()

  const makeMissionList = () => {
    return state.missions.map(mission => {
      return <Mission
        key={mission.id}
        props={mission}
      />
    })
  }

  return (
    <PageContainer>
      <TitleContainer>
        <p>Welcome back to</p>
        <h1>Mission Control</h1>
      </TitleContainer>
      <AccentLine color='gold' height={5}/>
      <section className={classes.missions}>
        {makeMissionList()}
      </section>
    </PageContainer>
  );
};

export default React.memo(MissionControl);
