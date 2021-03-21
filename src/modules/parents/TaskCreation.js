import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  FormHelperText,
  TextField,
  Button,
} from "@material-ui/core";
import ModalWrapper from "../../ui/modal/ModalWrapper";
import { createNewTask } from "./parentApiCalls";

const useStyles = makeStyles(() => ({
  modalContent: {
    textAlign: "center",
    overflow: "hidden",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
  name: null,
  description: null,
  category: "Brain Training",
  points: 1,
  photo: false,
  resource_type: "video",
  resource_link: null,
  resource_alt: null,
};

const TaskCreation = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [task, setTask] = useState(emptyTask);
  const [photoRequirement, setPhotoRequirement] = useState(false);

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
      return value === null;
    });

    return nullValue === undefined ? true : false;
  };

  const handleSubmit = e => {
    e.preventDefault();
    createNewTask(task)
      .then(data => console.log(data))
      .catch(error => console.log(error));
  };

  const button = (
    <Button
      className={classes.button}
      size="small"
      onClick={() => setOpen(true)}
      disabled={false}
      aria-label="create custom task">
      Create task
    </Button>
  );

  if (!open) return button;

  return (
    <ModalWrapper
      submitFunc={handleSubmit}
      btnMessage=""
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}>
      <section className={classes.modalContent}>
        <form className={classes.form}>
          <label>
            Name:
            <input
              type="text"
              placeholder="Task Name"
              name="name"
              value={task.name}
              onChange={e => handleTaskChange(e)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              placeholder="Task Description"
              name="description"
              value={task.description}
              onChange={e => handleTaskChange(e)}
            />
          </label>
          <label>
            Category:
            <select name="category" onChange={e => handleTaskChange(e)}>
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
            <select name="resource_type" onChange={e => handleTaskChange(e)}>
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
          {checkValidTask() === true && (
            <button onClick={e => handleSubmit(e)}>Submit Task</button>
          )}
        </form>
      </section>
    </ModalWrapper>
  );
};

export default TaskCreation;
