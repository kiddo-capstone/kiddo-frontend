import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    textShadow: '5px 5px 10px black',
    textAlign: "center",
    justifyContent: "center",
    zIndex: 1,
    margin: ((theme) => theme.margin),
    '& p': {
      margin: 0,
    }
  },
}));

const TitleContainer = (props) => {
  const classes = useStyles(props);

  return <div className={classes.titleContainer}>{props.children}</div>;
};

export default TitleContainer;
