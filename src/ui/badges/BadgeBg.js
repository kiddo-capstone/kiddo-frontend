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
    // flexDirection: "column",
    // background: props.color,
    // textAlign: "center",
    // border: "solid .1px gold",
    // fontSize: "calc(10px + 2vmin)",
    // color: "white",
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

export default BadgeBG;
