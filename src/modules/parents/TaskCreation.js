import { useEffect, useState, useContext } from "react";
import AppContext from '../App/AppContext'
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { createNewTask } from "./parentApiCalls";
import { getAllTasks } from "../common/apiCalls";

const useStyles = makeStyles(() => ({
  modalContent: {
    // textAlign: "left",
    overflow: "hidden",
    backgroundColor: "lightgray", 
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  form: {
    alignContent: 'left',
    // justifyContent: 'space-around',
    // height: '20em',
    height: '100%',
    padding: '1em',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    fontFamily: 'Roboto',
    color: '#272727',
    // alignItems: "center",
    '& input': {
      marginBottom: '.5em',
    }
  },
  button: {
    border: "solid 3px purple",
    fontWeight: "bold",
    margin: ".5em 0",
    color: "purple",
    "&:hover": { 
      backgroundColor: "purple !important", 
      color: "lightgray",
    },
  },
}));

const emptyTask = {
  name: "",
  description: "",
  category: "Brain Training",
  points: 1,
  photo: false,
  resource_type: "video",
  resource_link: "",
  resource_alt: "",
};

const TaskCreation = () => {
  const [state, dispatch] = useContext(AppContext)
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [task, setTask] = useState(emptyTask);
  const [ready, setReady] = useState(false);
  const [photoRequirement, setPhotoRequirement] = useState(false);

  useEffect(() => {
    checkValidTask()
    console.log('check task');
  }, [task])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTaskChange = e => {
    let newValue = e.target.value;

    if (e.target.name === "photo") {
      newValue = !photoRequirement;
      setPhotoRequirement(!photoRequirement);
    } else if (e.target.name === "points") {
      newValue = +newValue > 20 ? 20 : +newValue;
    }
    let updatedTask = { ...task, [e.target.name]: newValue };
    setTask(updatedTask);
  };

  const checkValidTask = () => {
    const nullValue = Object.values(task).find(value => {
      return value === null || value === "";
    });

    return nullValue === undefined ? setReady(true) : setReady(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await createNewTask(task)
      .then(data => console.log(data))
      .catch(error => console.log(error));
    setTask(emptyTask)
    updateTasks()
  };

  const updateTasks = async () => {
    const allTasks = await getAllTasks()
    const action = {type: "FETCH_TASKS", tasks: allTasks.data}
    dispatch(action)
  }

  const addTaskButton = (
    <Button
      className={classes.button}
      size="small"
      onClick={() => setOpen(true)}
      disabled={false}
      aria-label="create custom task">
      Create task
    </Button>
  );

  if (!open) return addTaskButton;

  return (
    <ModalWrapper
      submitFunc={handleSubmit}
      btnMessage=""
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
      backgroundColor='lightgray'
      border='none'
      minWidth='300px'
      height='50%'
      minHeight='250px'
      maxHeight='800px'
      padding='2em'
    >
      <form className={classes.form}>
        <label>
          Name:
          <input
            type="text"
            style={{ width: '100%'}}
            placeholder="Task Name"
            name="name"
            value={task.name}
            onChange={e => handleTaskChange(e)}
          />
        </label>
        <label>
          Description:
          <input
            style={{ width: '100%'}}
            type="text"
            placeholder="Task Description"
            name="description"
            value={task.description}
            onChange={e => handleTaskChange(e)}
          />
        </label>
        <label>
          Category:
          <select style={{ width: '100%'}} name="category" onChange={e => handleTaskChange(e)}>
            <option value="Brain Training">Brain Training</option>
            <option value="Health Training">Health Training</option>
            <option value="Creativity Training">Creativity Training</option>
            <option value="Basic Training">Basic Training</option>
          </select>
        </label>
        <label>
          Point Value:
          <input
            type="number"
            name="points"
            value={task.points}
            onChange={e => handleTaskChange(e)}
            min={1}
            max={20}
          />
        </label>
        <label>
          Photo Required:
          <input
            type="checkbox"
            name="photo"
            value={photoRequirement}
            checked={photoRequirement ? true : false}
            onChange={e => handleTaskChange(e)}
          />
        </label>
        <label>
          Resource:
          <select style={{ width: '100%'}} name="resource_type" onChange={e => handleTaskChange(e)}>
            <option value="video">Youtube Video</option>
            <option value="image">Image / Gif</option>
            <option value="link">Link</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Description"
          name="resource_alt"
          value={task.resource_alt}
          onChange={e => handleTaskChange(e)}
        />
        <input
          type="text"
          placeholder="Link"
          name="resource_link"
          value={task.resource_link}
          onChange={e => handleTaskChange(e)}
        />
        <Button variant="contained" color="primary" style={{margin: '1em'}} disabled={!ready ? true : false} onClick={e => handleSubmit(e)}>Submit Task</Button>
        {ready && (<FormHelperText style={{textAlign: 'center', fontWeight: 'bold', color: 'navy'}}>
          Your custom task will appear at <br/>
          the bottom of the task list
        </FormHelperText>)}
      </form>
    </ModalWrapper>
  );
};

export default TaskCreation;
