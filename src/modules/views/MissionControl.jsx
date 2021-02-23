import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import {PageContainer, TitleContainer, SmallContainer, MediumContainer} from "../../ui/containers/index";
import Button from "../../ui/button/Button";
import Mission from '../mission/Mission'
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(primary => ({
  missions: {
    justifyContent: 'space-between',
    height: '90%'
  }
}))

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext);
  const { colors, shadows, gradients, fonts } = state.theme;
  
  const classes = useStyles()

  const mapMissions = () => {
    return state.missions.map(mission => {
      return <Mission
        key={mission.id}
        props={mission}
      />
    })
  }

  return (
    <PageContainer>
      <TitleContainer>Mission Control</TitleContainer>
      <MediumContainer className={classes.missions}>
        {mapMissions()}
      </MediumContainer>
    </PageContainer>
  );
};

// .memo supposedly assists with caching - trying it out
export default React.memo(MissionControl);
