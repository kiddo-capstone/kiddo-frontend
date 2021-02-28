// import {kids} from '../../../assets/kids'
import kids from "../../../assets/kids_trio.png";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  image: {
    height: '4em',
  }
}))
  
  const Logo = (props) => {
  const classes = useStyles(props)
  return ( 
    <div>
      {kids}
      <img className={classes.image}src={kids}/>
    </div>
   );
}
 
export default Logo;