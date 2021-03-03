import React, {useContext} from "react";
import AppContext from '../App/AppContext'
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles(props => ({
  taskWrapper: {
    marginBottom: ".2em",
    width: "90%",
    height: "fit-content",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    transition: props => (props.attributes.is_completed ? "" : "ease .3s"),
    willChange: "transform",
    cursor: props => (props.attributes.is_completed ? "default" : "cursor"),
    "&:hover": {
      transform: props =>
        props.attributes.is_completed ? "" : "translateY(-.3em)",
      "& $task": {
        transition:
          "border ease 2s, background-color 1s, color 1s, box-shadow 1.5s",
        backgroundColor: "#ffdb00",
        border: "solid 4px gold",
        color: "black",
        boxShadow: "0 0 20px 15px gold",
      },
      "& $category": {
        "& p": {
          color: "black",
        },
      },
    },
  },
  category: {
    display: "flex",
    width: "fit-content",
    transform: "translate(.6em, 1.7em)",
    zIndex: 1,
    transition: "ease .3s",
    "& p": {
      willChange: "color transform",
      transition: "color .35s",
      color: "gold",
      margin: 0,
      marginRight: ".4em",
    },
  },
  pulse: {
    animation: "$pulse infinite alternate .75s ease",
    color: "lightgreen !important",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1.1)",
    },
    "100%": {
      transform: "scale(1.4)",
    },
  },
  task: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "solid 4px lightgrey",
    borderRadius: "5px",
    backgroundColor: "#3e445296",
    textAlign: "center",
    height: "100%",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
    padding: "1.5em",
    transition: "ease .3s",
  },
  completedTask: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "solid 4px lightgreen",
    borderRadius: "5px",
    backgroundColor: "#3e445296",
    textAlign: "center",
    height: "100%",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
    padding: "1em 0",
    paddingTop: '2.3em',
  },
  titleContainer: {
    marginTop: 1,
    display: "flex",
  },
  taskText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    display: "flex",
    "& h1": {
      fontWeight: "100",
      lineHeight: "1",
      margin: 0,
    },
    "& p": {
      fontFamily: `'Roboto', sans-serif`,
      fontWeight: "300",
      margin: 0,
    },
  },
  taskDescription: {
    fontFamily: "Roboto",
    fontWeight: "300",
    fontSize: "1rem",
  },
  taskImage: {
    margin: "auto",
    position: "relative",
    width: "80%",
    height: "80%",
    paddingTop: ".7em",
  },
  link: {
    textDecoration: "none",
    width: "inherit",
    display: "flex",
    justifyContent: "center",
  },
}));

const Task = ({ props }) => {
  const [state, dispatch] = useContext(AppContext)
  const classes = useStyles(props);
  const {
    attributes: {
      mission_id,
      task_name,
      task_description,
      task_category,
      points,
      photoIsRequired,
      is_completed,
      message,
      image_path,
    },
  } = props;

  console.log(props)

  const addTaskToState = (data) => {
    const action = { type: `FETCH_SELECTED_TASK`, selectedTask: data };
    dispatch(action);
  };

  const renderTitle = () => {
    if (is_completed) {
      return (
        <span className={classes.taskText} style={{ color: "lightgreen" }}>
          <h1 style={{ marginRight: ".5em" }}><u>{task_name}</u> Complete!</h1>
          {/* <p>{task_name}</p> */}
        </span>
      );
    } else {
      return (
        <span className={classes.taskText}>
          <h1 style={{ marginRight: ".5em" }}>Agent Task</h1>
          <p>{task_name}</p>
        </span>
      );
    }
  };

  const renderTaskCard = () => {
    if (!is_completed) {
      return (
        <Link onClick={() => addTaskToState(props)} className={classes.link} key={props.id} to={`/task/${props.id}`}>
          {taskCard()}
        </Link>
      )
    } else {
      return (
        <div className={classes.link}>
          {taskCard()}
        </div>
      ) 
    }
  }

  const taskCard = () => (
    <article className={classes.taskWrapper}>
      <span className={classes.category}>
        <p style={is_completed ? { color: "lightgreen" } : null}>{task_category}</p>
        <p className={is_completed ? classes.pulse : null}>💰 X {points}</p>
      </span>
      <div className={is_completed ? classes.completedTask : classes.task}>
        <div className={classes.titleContainer}>{renderTitle()}</div>
        <p className={classes.taskDescription}>
        {is_completed ? (
          <span style={{display: 'flex', flexDirection: 'column'}}>
            <i style={{ color: "lightgreen", fontSize: "1em", margin: '1em' }}>
              <b>Agent notes:</b>  {message}
            </i>
            <img className={classes.taskImage} src={image_path}/> 
          </span>)
          : (task_description)}
        </p>
      </div>
    </article>
  );

  return (
    renderTaskCard()
  );
};

export default React.memo(Task);
