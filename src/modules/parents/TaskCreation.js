import { useEffect, useState } from "react";
import Button from "../../ui/button/Button";
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
  const [task, setTask] = useState(emptyTask)


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
    console.log(task[e.target.name])
    const updatedTask = { ...task, [e.target.name]: e.target.value }
    
    setTask(updatedTask)
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
          <input 
            type="text"
            placeholder="Task Name"
            name="name"
            onChange={e => handleTaskChange(e)}
          />
          <input
            type="text"
            placeholder="Task Description"
            name="description"
            onChange={e => handleTaskChange(e)}
          />
          <label>
            Category:
          <select name="category" onChange={e => handleTaskChange(e)}>
            <option name="category" value="Brain Training">Brain Training</option>
            <option name="category" value="Health Training">Health Training</option>
            <option name="category" value="Creativity Training">Creativity Training</option>
            <option name="category" value="Basic Training">Basic Training</option>
          </select>
          </label>
        </form>
      </section>
    </ModalWrapper>
  )
}

export default TaskCreation