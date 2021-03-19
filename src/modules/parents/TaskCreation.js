import { useState } from "react";
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

const TaskCreation = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleSubmit = () => {
    console.log("submit")
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
            placeholder="Name"
          />
        </form>
      </section>
    </ModalWrapper>
  )
}

export default TaskCreation