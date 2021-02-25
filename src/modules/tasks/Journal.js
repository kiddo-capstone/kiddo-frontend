import React, {useState} from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  textBox: {
    fontSize: '1em',
    width: '90%',
    height: '100%',
    height: '100%',
    border: 'solid 2px hotpink',
    padding: '1em',
    borderRadius: '10px',
    backgroundColor: 'rgb(40,44,52, .5)',
    outline: 'none',
    color: 'white',
  }
}));

const Journal = props => {
  const [entry, setEntry] = useState('')
  const classes = useStyles();

  return (
    <section>
      <form>
        <textarea rows="10" cols="60" className={classes.textBox} type="text" value={entry} name="entry" placeholder="Write you answer here and click submit when you're done!" onChange={event => setEntry(event.target.value)}></textarea>
      </form>
      {/* <input type='submit'/> */}
    </section>
  );
};

export default Journal;
