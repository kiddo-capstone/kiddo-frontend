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
    flexDirection: "row",
    flexWrap: "wrap",
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
        <form>
          <input 
            type="text"
            placeholder="Task Name"
            name="name"
            onChange={e => handleTaskChange(e)}

          />
        </form>
      </section>
    </ModalWrapper>
  )
}

export default TaskCreation