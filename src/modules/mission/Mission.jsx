import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import { TitleContainer, SmallContainer} from "../../ui/containers/index";
import Button from "../../ui/button/Button";
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  mission: {
    margin: '.5em 0',
    width: '90%',
    height: 'fit-content'
  },
}))

const Mission = ({props}) => {
  const classes = useStyles()
  const {attributes} = props
  const {name, due_date, user_id, created_at, updated_at} = attributes
  console.log(attributes);
  return ( 
    <div className={classes.mission}>
      <SmallContainer>
        <p>{name}</p>
        <p>due: {due_date}</p>
      </SmallContainer>
    </div>
   );
}
 
export default Mission;