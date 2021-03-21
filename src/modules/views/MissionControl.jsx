import React, { useContext, useEffect, useState } from "react";
import AppContext from "../App/AppContext";
import {getUserById} from '../common/apiCalls'
import {PageContainer, TitleContainer } from "../../ui/containers/index";
import Mission from '../mission/Mission'
import {makeStyles} from '@material-ui/core'
import AccentLine from '../../ui/decorative/AccentLine'
import {backArrow} from '../../assets/backarrow'
import {useHistory} from 'react-router-dom'

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
  arrow: {
    filter: 'drop-shadow(2px 4px 9px black)',
    position: 'absolute',
    top: '10%',
    left: 'calc(300px + 2%)',
    willChange: 'transform',
    transition: 'ease .3s',
    cursor: 'pointer',
    [theme.breakpoints.down("960")]: {
      top: '80px',
      left: '2%',
      zIndex: '10',
      '& svg': {
        height: '4em',
      }
    },
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
}))

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext);  
  const [sessionUser, setSessionUser] = useState(null)
  const classes = useStyles()
  const history = useHistory()

  useEffect(async () => {
    if (state.currentUser?.id !== props.id) {
      const matched = await getUserById(props.id)
      const action = { type: `SET_CURRENT_USER`, currentUser: matched.data }
      dispatch(action)
      setSessionUser(matched)
    }
  },[setSessionUser])

  const makeMissionList = () => {
    if (sessionUser) {
      const userID = state.currentUser.id
      const userMissions = state.missions.filter(m => m.attributes.user_id === +userID)
      return userMissions.sort((a, b)=> b.id-a.id).map(m => (<Mission key={m.id} props={m} />))
    }
  }

  return (
    <PageContainer>
      <div className={classes.arrow} onClick={() => history.push(`/accounts`)}>
        {backArrow(state.theme.colors.blue)}
      </div>
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
