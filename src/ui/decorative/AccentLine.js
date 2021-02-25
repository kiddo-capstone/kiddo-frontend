import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  line: {
    height: ((theme) => theme.height || '5px'),
    backgroundColor: ((theme) => theme.color || 'cyan'),
    width: "-webkit-fill-available",
    transform: "translateY(-2.8em)",
    zIndex: 0,
  },
}));

const AccentLine = (props) => {
  const classes = useStyles(props)
  return ( 
    <div 
      className={classes.line}
    />
   );
}
 
export default AccentLine;