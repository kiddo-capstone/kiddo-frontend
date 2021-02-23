import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((props) => ({
  BadgeBG: {
    background: '#757575',
    // background: props.color,
    borderRadius: '15px',
    height: "fit-content",
    padding: '.2em .2em',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
