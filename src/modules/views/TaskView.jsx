import React, { useContext, useState, useEffect } from "react";
import {Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import Journal from "../tasks/Journal";
import ImageCapture from "../tasks/ImageCapture";
import AccentLine from "../../ui/decorative/AccentLine";
import Button from "../../ui/button/Button";
import { updateSelectedTaskAPI, getMissionTaskById } from "../common/apiCalls";

const useStyles = makeStyles(theme => ({
  innerContainer: {
    width: "100%",
    display: "flex",
    padding: "0em 2em",
    flexWrap: "wrap",
    marginBottom: '1em',
    "& h1, h2, h3, h4, p": {
      margin: 0,
    },
  },
  descriptionContainer: {
    border: theme => `solid 3px ${theme.colors.blue}`,
    borderRadius: "10px",
    fontFamily: "monospace",
    padding: "1em 1em",
    minWidth: "350px",
    minHeight: '-webkit-fill-available',
    height: 'clamp(5em, 95%, 100%)',
    overflow: "auto",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  actionContainer: {
    border: (theme => `solid 3px ${theme.colors.blue}`),
    borderRadius: "10px",
    fontFamily: "monospace",
    minWidth: "350px",
    height: 'clamp(5em, 95%, 100%)',
    minHeight: '-webkit-fill-available',
    backgroundColor: "rgb(40,44,52, .5)",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  category: {
    display: "flex",
    width: "100%",
    alignContent: "baseline",
    zIndex: 1,
    "& p": {
      color: "gold",
      margin: 0,
      marginRight: ".4em",
    },
  },
  left: {
    margin: '2% 0',
    flex: 1,
  },
  right: {
    margin: '2% 0',
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  taskImage: {
    borderRadius: '10px',
    maxHeight: "60vh",
    maxWidth: "30vw",
    filter: 'drop-shadow(2px 4px 6px black)',
    marginTop: '1em',
  },
}));

const TaskView = (props) => {
  const [state, dispatch] = useContext(AppContext);
  const [taskComplete , setTaskComplete] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(null);
  const [template, setTemplate] = useState(null)
  const [loading, setLoading] = useState(true)
  const classes = useStyles(state.theme);

  useEffect(async() => {
    if (!state.selectedTask || props.id !== state.selectedTask.id) {
      console.log('SYNC TASKS');
      await getMissionTaskById(props.id)
      .then(resp => addTaskToState(resp.data))
    }
    findTemplateTask()
  }, [])

  const findTemplateTask = () => {
    const templateId = state.selectedTask.attributes.task_id
    const template = state.tasks.find(t => +t.id === templateId)
    setTemplate(template)
    console.log(template);
    setLoading(false)
  }

  const addTaskToState = (data) => {
    const action = { type: `FETCH_SELECTED_TASK`, selectedTask: data };
    dispatch(action);
  };

  const checkReady = (trueFalse, updatedTask) => {
    if (taskComplete !== trueFalse) {
      setTaskComplete(trueFalse)      
      setUpdatedTask(updatedTask)
    }
  };

  const handleClick = async () => {
      let data = new FormData();
      data.append("is_completed", true)

      if(updatedTask.message) {
        data.append("message", updatedTask.message)
      }
      if(updatedTask.image) {
        data.append("image", updatedTask.image)
      }
      await updateSelectedTaskAPI(props.id, data)
      addTaskToState("selectedTask", {})
  };

  const renderResources = () => {
    const {resource_type, resource_link, resource_alt} = template.attributes
    if (resource_type === 'video') {
      return <div style={{borderRadius: '10px', overflow: 'hidden', marginTop: '1em'}}><ReactPlayer controls={true} url={resource_link} alt={resource_alt}/></div>
    } else if (resource_type === 'image') {
      return <img className={classes.taskImage} src={resource_link} alt={resource_alt}/>
    } else {
      return <Link style={{marginTop: '1em'}} to={resource_link}>Click here to learn more!</Link>
    }
  }

  const getTask = () => {
    const {photo} = template.attributes
    if (!photo) {
      return(
        <div className={classes.actionContainer}>
          <Journal checkReady={checkReady} />
        </div>
      )
    } else if (photo) {
      return (
        <div className={classes.actionContainer}>
          <ImageCapture checkReady={checkReady}/>
        </div>
      )
    }
  };

  return loading ? <PageContainer>LOADING</PageContainer> : (
    <PageContainer>
      <TitleContainer style={{ width: "100%" }}>
        <p>Agent Task:</p>
        <h1>{state.selectedTask.attributes.task_name}</h1>
      </TitleContainer>
      <AccentLine color={state.theme.colors.blue} />
      <section className={classes.innerContainer}>
        <section className={classes.left}>
          <span className={classes.category}>
            <p>{state.selectedTask.attributes.task_category}</p>
            <p>💰 X {state.selectedTask.attributes.points}</p>
          </span>
          <div className={classes.descriptionContainer}>
            <p>
            <b style={{ color: state.theme.colors.blue }}>{state.selectedTask.attributes.task_description.split(' ').slice(0, 4).join(' ') + ' '}</b>
            {state.selectedTask.attributes.task_description.split(' ').slice(4, state.selectedTask.attributes.task_description.length -1).join(' ')}
            </p>
            {renderResources()}
          </div>
        </section>
        <div style={{ width: "1%" }} />
        <section className={classes.right}>
          <span className={classes.category} style={{ opacity: 0 }}>
            <p>.</p>
          </span>
          {getTask()}
        </section>
      </section>

        <Link to={`/daily-mission/${state.selectedMission.id}`} style={{width: '100%'}}>
          
          <Button primary type="submit" onClick={handleClick} disabled={taskComplete ? false : true}>
          {taskComplete ? "All Done!" : "Complete Task to Submit"}
          </Button>
        </Link>
  
    </PageContainer>
  );
};

export default React.memo(TaskView);
