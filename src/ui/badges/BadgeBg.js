import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((props) => ({
  BadgeBG: {
    width: '50%',
    background: '#ffffff29',
    borderRadius: '3em',
    display: "flex",
    justifyContent: "space-around",
    paddingTop: '.3em',
    marginTop: '.5em',
    border: 'solid 1px',
    // background: '#757575',
    // height: "fit-content",
    // padding: '.2em .2em',
    // alignItems: "center",
  },
}));

const BadgeBG = (props) => {
  const classes = useStyles(props);
  const {children} = props
  return (
    <div 
      className={classes.BadgeBG}  
    >
      {children}
    </div>
    );
};

export default React.memo(BadgeBG);
