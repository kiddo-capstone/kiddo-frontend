import React from 'react';
import {makeStyles} from '@material-ui/core'
import * as fonts from '../common/fonts'
import * as colors from '../common/colors'

const useStyles = makeStyles(theme => ({
  butt: {
    fontSize: '1em',
    fontWeight: '400',
    padding: '2%',
    fontFamily: fonts.secondary,
    borderRadius: '15px',
    borderColor: ((theme) => theme.primary ? colors.primaryAccent :  colors.secondaryAccent),
    background: ((theme) => theme.primary ? colors.primary :  colors.secondary),
    color: colors.darkGrey,
    // color: ((theme) => theme.primary ? colors.primaryAccent :  colors.secondaryAccent),
    outline: 'none',
    willChange: 'transform',
    margin: '2%',
    cursor: 'pointer',
    transition: 'transform ease .3s, border ease 2s, background ease 1s, color ease 1s',
    '&:hover': {
      transform: 'translateY(-3%)',
    },
    '&:disabled': {
      borderColor: colors.grey1, 
      background: 'none',
      // background: colors.grey3,
      color: colors.grey2,    
      cursor: 'default',
      transform: 'none',
    }
  }
}))

const Button = (props) => {
  const {children, disabled, primary, ...others} = props
  const classes = useStyles(props)
  return ( 
    <button 
      aria-label={children}
      className={classes.butt}
      disabled={disabled}
      {...others}
    >
      {children}
    </button>
   );
}
 
export default React.memo(Button);