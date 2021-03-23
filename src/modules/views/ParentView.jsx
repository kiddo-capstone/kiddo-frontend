import React, { useState, useEffect, useContext } from "react";
import {createNewMission, addTasksToMission, addNewUserToParent} from '../parents/parentApiCalls'
import {getUserById, getParentById, createNewReward} from '../common/apiCalls'
import AppContext from '../../modules/App/AppContext'
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import {
  FormControl,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";
import TransferList from '../parents/TransferList'
import ExampleMission from '../mission/ExampleMission'
import RewardForm from "../parents/RewardForm";
import NewChildForm from "../parents/NewChildForm";
import ChildList from "../parents/ChildList";
import TaskCreation from "../parents/TaskCreation";

const kiddoParentId = JSON.parse(localStorage.getItem("kiddoParentId"));

const ParentView = () => {
  const [child, setChild] = React.useState("");
  const [sessionUser, setSessionUser] = React.useState([]);
  const [parentChildren, setParentChildren] = React.useState([]);
  const [missionName, setMissionName] = useState("");
  const [missionReady, setMissionReady] = React.useState(false);
  const [choices, setChoices] = React.useState([]);
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    if (!state.parentId) {
      const action = { type: `SET_PARENT_ID`, parentId: kiddoParentId }
      dispatch(action)  
    }
    if (state.parentId || kiddoParentId) {
      updateParent()
    }
  },[state.parentId])
  
  useEffect(() => {
    if (sessionUser) fetchChildren()
    console.log(sessionUser);
  },[sessionUser])
  
  useEffect(() => {
    setMissionReady(false) 
    if (choices.length && child && missionName) {
      setMissionReady(true)
    }
  },[choices, child, missionName])

  const updateParent = async () => {
    if (state.parentId) {
      const parent = await getParentById(+state.parentId)
      const action = { type: `SET_CURRENT_USER`, currentUser: parent.data }
      dispatch(action)
      setSessionUser(parent.data)
    }
  }
  
  const fetchChildren = async () => {
    const childIds = sessionUser.relationships?.users.data
    if (childIds){
      const fetchedKids = await childIds.reduce(async (promises, cid) => {
        const allChildren = await promises
        const child = await getUserById(cid.id)
        allChildren.push(child)
        return allChildren
      }, [])
      setParentChildren(fetchedKids)
    }
  }

  const addChild = async (name) => {
    const childInfo = {name: name, parent_id: state.currentUser.id }
    await addNewUserToParent(childInfo)
    updateParent()
    await fetchChildren()
  }

  const updateSelection = (selection) => {
    setChild(selection);
  };
  
  const getChoices = (tasks) => {
    setChoices(tasks)
  }

  const composeData = async () => {
    const mission = {"name": missionName, "due_date": "2025-02-03", "user_id": child.id}
    const missionId = await createNewMission(mission)
    choices.forEach(async c => await addTasksToMission({"mission_id": +missionId.data.id, "task_id": +c.id}))
  }

  const handleMissionSubmit = () => {
    composeData()
    setChild("");
    setMissionName("");
  }

  const handleRewardSubmit = async (reward) => {
    await createNewReward(reward)
    setChild("");
  }

  const placeholderMission = {
      "id": "32",
      "type": "mission",
      "attributes": {
          "name": missionName || 'Add a Title Above',
          "due_date": "2025-02-03",
          "user_id": 7,
          "created_at": new Date(),
          "updated_at": "2021-03-04T05:26:39.507Z"
    }
  }

  return (
    <div style={{ backgroundColor: "lightgray", height: "100%" }}>
      <PageContainer>
        <TitleContainer><h1 style={{fontSize: '2em', marginTop: '.4em', marginBottom: 0, color: 'gold' }}>Parent Dashboard</h1></TitleContainer>      

        <FormControl>
          <NewChildForm addChild={addChild}/>
          <br/>
        </FormControl>

        <FormControl>
          <RewardForm parentId={state.currentUser?.id} childId={child?.id} handleRewardSubmit={handleRewardSubmit}>
            <FormControl>
              <ChildList childList={parentChildren} selection={child} updateSelection={updateSelection}>
                Who is eligible for this reward?
              </ChildList>
            </FormControl>
          </RewardForm>  
          <br/>
        </FormControl>

        <FormControl>
          <TitleContainer>
            <h1 style={{fontSize: '1em', marginTop: '.4em', marginBottom: '.1em' }}>Mission Creation</h1>
          </TitleContainer>      
          <FormHelperText style={{margin:'1em', textAlign: 'center'}}>
            Create a mission with custom or preloaded tasks so your KidDo Agent can earn points!
          </FormHelperText>
          <TextField
            id="outlined-basic"
            label="Mission Title"
            aria-label="mission title"
            variant="outlined"
            value={missionName}
            onChange={(event) => setMissionName(event.target.value)}
          />
          <FormHelperText style={{margin:'1em'}}id="my-helper-text" aria-label="mission-name-helper-text">
            This is the name of the mission your child will see 🥳 
          </FormHelperText>
            <TransferList getChoices={getChoices}>
              <TaskCreation />
            </TransferList>
            <FormHelperText style={{margin:'1em', textAlign:'center'}}id="my-helper-text" aria-label="task-selection-helper-text">
              Pick at least one, but no more than four tasks per mission!
            </FormHelperText>
        </FormControl>
        
        <FormControl>
          <ChildList childList={parentChildren} selection={child} updateSelection={updateSelection}>
            Who is this mission for?
          </ChildList>
          <Button style={{margin: '1em'}} onClick={handleMissionSubmit} disabled={missionReady ? false : true} variant="contained" color="primary">
            {missionReady ? 'Add Mission!' : 'add more to the mission!'}
          </Button>  
        </FormControl>

        <div style={{width:'80%', justifyContent:'center', display:'flex', backgroundColor:'darkgrey', marginTop: '1em'}}>
          <ExampleMission tasks={choices} props={placeholderMission} />
        </div>
        <FormHelperText style={{paddingBottom: '3em'}}>This is how your child's mission will look!</FormHelperText>
        
      </PageContainer>
    </div>
  );
};

export default ParentView;
