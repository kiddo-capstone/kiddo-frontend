import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((props) => ({
  BadgeBG: {
    width: 'fit-content',
    background: '#757575',
    borderRadius: '15px',
    height: "fit-content",
    padding: '.2em .2em',
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: '.6em',
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
