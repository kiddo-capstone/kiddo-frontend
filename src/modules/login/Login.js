import React, {useContext, useEffect} from "react";
import AppContext from '../app/AppContext'
import { makeStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const [state, dispatch] = useContext(AppContext)
  const classes = useStyles();
  const [kiddoUser, setKiddoUser] = React.useState("");

  useEffect(() => {
    if (state.currentUser !== kiddoUser) {
      addCurrentUserToState()
    }
  }, [kiddoUser])

  const handleChange = event => {
    setKiddoUser(event.target.value);
    if (kiddoUser !== null || kiddoUser !== '') {
      addCurrentUserToState()
    }
  };

  const addCurrentUserToState = () => {
    const action = {type: 'SET_CURRENT_USER', currentUser: kiddoUser}
    dispatch(action)
  }

  const generateUsers = () => {
    const allUsers = state.users
    return allUsers.map(u => (<MenuItem value={u}>{u.attributes.name}</MenuItem>))
    // return allUsers.map(u => (<MenuItem value={u.attributes.name}>{u.attributes.name}</MenuItem>))
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">Select User</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={kiddoUser}
        onChange={handleChange}
        label="kiddoUser">
        <MenuItem value={""}>
          <em>None</em>
        </MenuItem>
        {generateUsers()}
        {/* <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  );
};

export default Login;
