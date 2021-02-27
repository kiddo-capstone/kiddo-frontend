import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  badge: {
    // width: 'fit-content',
    // height: "fit-content",
    // padding: '0 .5em',
    // maxHeight: '1em',
  },
}));

const BadgeContainer = ({children}) => {
  const classes = useStyles();

  return ( 
  <div className={classes.badge}>{children}</div>
   );
}
 
export default React.memo(BadgeContainer);