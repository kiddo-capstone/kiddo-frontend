import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core";
import AppContext from "../app/AppContext";


const useStyles = makeStyles(theme => ({
  form: {
    height: '12em',
  },
  textBox: {
    fontSize: "1em",
    width: "100%",
    border: "none",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "rgb(40,44,52, .0)",
    outline: "none",
    color: "blanchedalmond",
    resize: 'none',
    '&::placeholder': {
      color: '#9a9a9a', 
    }
  },
}));

const Journal = ({ checkReady }) => {
  const [state, dispatch] = useContext(AppContext);
  const { selectedTask } = state;

  const [entry, setEntry] = useState("");
  // will need this for later logic addition
  // const [currentTask, setCurrentTask] = useState(selectedTask);

  const classes = useStyles();

  useEffect(() => {
    entry ? checkReady(true) : checkReady(false);
    // we need logic to bundle the updated task object to have completed true/false, and
    // bubble it back up to TaskView - button submission => DISPATCH to update state for task
  }, [entry]);

  const handleChange = (value) => {
    setEntry(value);
  };

  return (
    <section>
      <form>
        <textarea
          rows="8"
          cols="60"
          className={classes.textBox}
          type="text"
          value={entry}
          name="entry"
          placeholder="Write your answer here and click submit when you're done!"
          onChange={(event) => setEntry(event.target.value)}
        ></textarea>
      </form>
      {/* <input type='submit'/> */}
    </section>
  );
};

export default Journal;
