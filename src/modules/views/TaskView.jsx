import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import {PageContainer, TitleContainer, SmallContainer, MediumContainer} from "../../ui/containers/index";
import { getTaskById } from "../common/apiCalls";

const useStyles = makeStyles(theme => ({
  s: {},
}))


const TaskView = (props) => {

  const [state, dispatch] = useContext(AppContext);
  const [error, setError] = useState(null);
  
  const classes = useStyles()

  // useEffect(async () => {
//   await getTaskById(id)
//     .then(data => addTaskToState('selectedMission', data.data))
//     .catch(error => setError(error))
//   }, [])

  // const addTaskToState = (type, data) => {
  //   const action = { type: `FETCH_SELECTED_TASK`, selectedTask: data }
  //   dispatch(action)
  // }

  return ( 
    <PageContainer>
      <TitleContainer>Task Title</TitleContainer>
    </PageContainer>
   );
}
 
export default TaskView;