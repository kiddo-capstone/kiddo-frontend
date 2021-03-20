import React, { useContext, useEffect } from "react";
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {getAllUsers} from '../common/apiCalls'

const useStyles = makeStyles((theme) => ({
  root: {
    borderColor: "white",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menu: {
    color: "white !important",
  },
}));

const Login = () => {
  const [state, dispatch] = useContext(AppContext);
  const classes = useStyles();
  const [kiddoUser, setKiddoUser] = React.useState(null);

  useEffect(() => {
    if (state.currentUser !== kiddoUser) {
      addCurrentUserToState();
    }
  }, [kiddoUser]);

  const handleChange = (event) => {
    setKiddoUser(event.target.value);
    if (kiddoUser !== null) {
      addCurrentUserToState();
    }
  };

  const addCurrentUserToState = () => {
    const action = { type: "SET_CURRENT_USER", currentUser: kiddoUser };
    dispatch(action);
  };

  const generateUsers = async () => {
    // const allUsers = state.users;
    const allUsers = await getAllUsers();
    return allUsers.map((u) => (
      <MenuItem key={u.id} value={u}>
        {u.attributes.name}
      </MenuItem>
    ));
  };

  return (
    <FormControl
      variant="filled"
      className={classes.formControl}
      style={{ backgroundColor: "gray", borderRadius: "10px" }}
    >
      <InputLabel className={classes.menu} id="user-select-label">
        Select User
      </InputLabel>
      <Select
        className={classes.menu}
        labelId="user-select-label"
        id="user-select"
        value={kiddoUser}
        onChange={handleChange}
        aria-label="select kiddoUser"
      >
        <MenuItem value={""}>
          <em>None</em>
        </MenuItem>
        {generateUsers()}
      </Select>
    </FormControl>
  );
};

export default Login;
