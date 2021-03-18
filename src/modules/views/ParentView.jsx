import React, { useState, useEffect, useContext } from "react";
import {createNewMission, addTasksToMission, addNewUserToParent} from '../parents/parentApiCalls'
import {getUserById, getParentById} from '../common/apiCalls'
import AppContext from '../../modules/App/AppContext'
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  TextField,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import TransferList from '../parents/TransferList'
import ExampleMission from '../mission/ExampleMission'

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  add: {
    margin: theme.spacing(0.5, 0),
  },
}));

const ParentView = () => {
  const classes = useStyles();
  const [child, setChild] = React.useState("");
  const [newChildName, setNewChildName] = React.useState("");
  const [paChildren, setPaChildren] = React.useState([]);
  const [ready, setReady] = React.useState(false);
  const [missionName, setMissionName] = useState("");
  const [choices, setChoices] = React.useState([]);
  const [state, dispatch] = useContext(AppContext);


  useEffect(async () => {
    setReady(false)
    
    if (!state.currentUser || +state.currentUser.id !== 4) {
      updateUser()
    }
    
    if (choices.length && child && missionName) {
      setReady(true)
    }
  },[choices, missionName, child])

  useEffect(() => {
    if (state.currentUser?.relationships) fetchChildren()
  },[state.currentUser])

  const updateUser = async () => {
    const user = await getParentById(4)
    const action = { type: `SET_CURRENT_USER`, currentUser: user.data }
    dispatch(action)
  }

  const generateChildList = () => {
    return paChildren.map((u) => (
      <MenuItem key={u.data.attributes.id} value={u.data}>
        {u.data.attributes.name}
      </MenuItem>
    ));
  };
  
  const fetchChildren = async () => {
    const childIds = state.currentUser.relationships.users.data
    const fetchedKids = await childIds.reduce(async (promises, cid) => {
      const allChildren = await promises
      const child = await getUserById(cid.id)
      allChildren.push(child)
      return allChildren
    }, [])
    setPaChildren(fetchedKids)
  }

  const addChild = (name) => {
    const childInfo = {name: name, parent_id: state.currentUser.id }
    console.log(childInfo);
    addNewUserToParent(childInfo)
    setNewChildName("")
    updateUser()
  }

  const handleChange = event => {
    console.log(event.target.value)
    setChild(event.target.value);
  };
  
  const getChoices = (tasks) => {
    setChoices(tasks)
  }

  const composeData = async () => {
    const mission = {"name": missionName, "due_date": "2025-02-03", "user_id": child.id}
    const missionId = await createNewMission(mission)
    choices.forEach(async c => await addTasksToMission({"mission_id": +missionId.data.id, "task_id": +c.id}))
  }

  const handleSubmit = () => {
    composeData()
    clearInputs()
  }

  const clearInputs = () => {
    setChild("");
    setMissionName("");
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
        
        <TitleContainer><h1 style={{fontSize: '1em', marginTop: '.4em', marginBottom: '1em' }}>Add a child</h1></TitleContainer>      
        <FormControl>
        <TextField
            id="outlined-basic"
            label="KidDo Agent Name"
            variant="outlined"
            value={newChildName}
            onChange={(event) => setNewChildName(event.target.value)}
          />
        <FormHelperText style={{margin:'1em'}}id="my-helper-text">
          Add your KidDo Agents by name and we'll send them your missions! 
        </FormHelperText>
        <Button style={{margin: '1em'}} onClick={() => addChild(newChildName)} disabled={newChildName ? false : true} variant="contained" color="primary">
          {newChildName ? 'Add KidDo Agent!' : 'Add Agent Details'}
        </Button> 

        <TitleContainer><h1 style={{fontSize: '1em', marginTop: '.4em', marginBottom: '1em' }}>Mission Creation</h1></TitleContainer>      
          <TextField
            id="outlined-basic"
            label="Mission Title"
            variant="outlined"
            value={missionName}
            onChange={(event) => setMissionName(event.target.value)}
          />
          <FormHelperText style={{margin:'1em'}}id="my-helper-text">
            This is the name of the mission your child will see 🥳 
          </FormHelperText>
            <TransferList getChoices={getChoices}/>
            <FormHelperText style={{margin:'1em'}}id="my-helper-text">
              Pick at least one, but we recommend no more than four tasks per mission!
            </FormHelperText>
        </FormControl>
        
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Child</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={child}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {generateChildList()}
        </Select>
        <FormHelperText>Which child is this mission for?</FormHelperText>
      </FormControl>

      <Button style={{margin: '1em'}} onClick={handleSubmit} disabled={ready ? false : true} variant="contained" color="primary">
        {ready ? 'Add Mission!' : 'add more to the mission!'}
      </Button>  

        <div style={{width:'80%', justifyContent:'center', display:'flex', backgroundColor:'darkgrey', marginTop: '1em'}}>
          <ExampleMission tasks={choices} props={placeholderMission} />
        </div>
        <FormHelperText style={{paddingBottom: '3em'}}>This is how your child's mission will look!</FormHelperText>
      </PageContainer>
    </div>
  );
};

export default ParentView;
