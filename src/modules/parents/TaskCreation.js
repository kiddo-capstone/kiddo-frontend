import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModalWrapper from "../../ui/modal/ModalWrapper";

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
  }
}))

const emptyTask = {
  name: null,
  description: null,
  category: null,
  points: 0,
  photo: false,
  resource_type: null,
  resource_link: null,
  resource_alt: null
}

const TaskCreation = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [task, setTask] = useState(emptyTask);
  const [photoRequirement, setPhotoRequirement] = useState(false)


  useEffect(() => {
    console.log('task: ', task)
  }, [task])

  const handleClickOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }
  
  const handleTaskChange = (e) => {
    let newValue = e.target.value;

    if (e.target.name === "photo") {
      newValue = !photoRequirement
      setPhotoRequirement(!photoRequirement)
    } else if (e.target.name === "points") {
      newValue = +newValue > 20 ? 20 : +newValue
    }

    let updatedTask = { ...task, [e.target.name]: newValue };
    
    setTask(updatedTask);
  }
  
  const handleSubmit = () => {
    console.log("submit")
  }

  return (
    <ModalWrapper
      submitFunc={handleSubmit}
      btnMessage="Create a task"
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      open={open}
    >
      <section className={classes.modalContent}>
        <form className={classes.form}>
          <label>
          Name:
          <input 
            type="text"
            placeholder="Task Name"
            name="name"
            onChange={e => handleTaskChange(e)}
          />
          </label>
          <label>
          Description:
          <input
            type="text"
            placeholder="Task Description"
            name="description"
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
                value={true}
                checked={photoRequirement ? true : false}
                onChange={(e) => handleTaskChange(e)}
              />
            </label>
          <label>
            Resource:
            <select name="resource_type" onChange={e => handleTaskChange(e)}>
              <option value="video">Youtube Video</option>
              <option value="image">Image / Gif</option>
              <option value="link">Link</option>
            </select>
            <input
              type="text"
              placeholder="Description"
              name="resource_alt"
              onChange={e => handleTaskChange(e)}
            />
            <input
              type="text"
              placeholder="Link"
              name="resource_link"
              onChange={e => handleTaskChange(e)}
            />
          </label>
        </form>
      </section>
    </ModalWrapper>
  )
}

export default TaskCreation