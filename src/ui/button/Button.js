import React from 'react';
import {makeStyles} from '@material-ui/core'
import * as fonts from '../common/fonts'
import * as colors from '../common/colors'

const useStyles = makeStyles(primary => ({
  butt: {
    fontSize: '1em',
    fontWeight: '400',
    padding: '2%',
    fontFamily: fonts.secondary,
    borderRadius: '15px',
    borderColor: !primary ? colors.secondaryAccent : colors.primaryAccent,
    background: !primary ? colors.secondary : colors.primary,
    color: !primary ? colors.secondaryAccent : colors.primaryAccent,
    outline: 'none',
    willChange: 'transform',
    margin: '2%',
    cursor: 'pointer',
    transition: 'transform ease .3s',
    '&:hover': {
      transform: 'translateY(-3%)',
    },
    '&:disabled': {
      borderColor: colors.grey1, 
      background: colors.grey3,
      color: colors.grey2,    
      cursor: 'default',
      transform: 'none',
    }
  }
}))

const Button = ({children, disabled, primary, ...others}) => {
  const classes = useStyles(primary ? true : false)
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