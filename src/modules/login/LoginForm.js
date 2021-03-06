import { makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import AppContext from "../App/AppContext";
import theme from "../../ui/common/theme";
import { useHistory } from "react-router-dom";
import {getAllUsers} from '../common/apiCalls'

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "0.4em",
    outline: "none",
  },
  submit: {
    fontFamily: theme.fonts.secondary,
    margin: "10%",
    padding: "0.5em",
    outline: "none",
    background: theme.colors.grey3,
    cursor: "pointer",
    color: "white",
  },
}));

const LoginForm = () => {
  const [state, dispatch] = useContext(AppContext);
  const [email, setEmail] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const login = async (e) => {
    e.preventDefault();
    const allUsers = await getAllUsers();
    // const user = state.users.find((user) => {
    const user = allUsers.find((user) => {
      return user.attributes.email === email;
    });
    if (user) {
      const action = { type: "SET_CURRENT_USER", currentUser: user };
      dispatch(action);
      history.push("/mission-control");
    }
  };

  return (
    <form className={classes.form}>
      <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        className={classes.input}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className={classes.submit} onClick={login}>
        LOG IN
      </button>
    </form>
  );
};

export default LoginForm;
