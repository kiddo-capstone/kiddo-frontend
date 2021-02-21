import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  titleContainer: {
    textAlign: 'center',
    margin: '0 2%',
    width: '100%',
    justifyContent: 'center',
    // backgroundColor: '#282c34',
    // alignItems: 'center',
    // minHeight: '100%',
    // display: 'flex',
    // flexDirection: 'column',
    // fontSize: 'calc(10px + 2vmin)',
    // color: 'white',
    // fontFamily: "'Russo One', sans-serif",
  }
}))

const TitleContainer = ({children}) => {
  const classes = useStyles()

  return ( 
    <div className={classes.titleContainer}>
      {children}
    </div>
   );
}
 
export default TitleContainer;