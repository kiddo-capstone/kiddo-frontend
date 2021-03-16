import React, { useContext, useEffect } from "react";
import AppContext from "../App/AppContext";
import {PageContainer, TitleContainer } from "../../ui/containers/index";
import Mission from '../mission/Mission'
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
    [theme.breakpoints.down('600')]: {
      minWidth: '20px',
    },
  },
  login: {
    position: 'fixed',
    right: '8%',
    top: '5%',
    opacity: 0,
    '&:hover': {
      opacity: 1,
    },
    [theme.breakpoints.down('1200')]: {
      right: '2%',
      top: '1%',
    },
    [theme.breakpoints.down('600')]: {
      right: '2%',
      top: '15%',
      '&:hover': {
        opacity: 1,
      },
      '&:focus': {
        opacity: 1,
      },
    },
  },
}))

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext);  
  const classes = useStyles()

  useEffect(() => {
    console.log('effect');
  })

  const makeMissionList = () => {
    if (state.currentUser === "" || state.currentUser === null) {
      // for when no user is selected, will display all missions in the DB
      return state.missions.sort((a, b)=> b.id-a.id).map(mission => {
        return <Mission
        key={mission.id}
        props={mission}
        />
      })
    } else {
      const userID = state.currentUser.id
      const userMissions = state.missions.filter(m => m.attributes.user_id === +userID)
      return userMissions.map(m => (<Mission key={m.id} props={m} />))
    }
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
