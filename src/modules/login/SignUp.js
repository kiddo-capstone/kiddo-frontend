import React, { useContext, useEffect, useState } from "react";
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import { createNewUser, getAllUsers } from "../common/apiCalls";
import theme from "../../ui/common/theme";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "0.4em",
    margin: "2%",
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

const SignUp = () => {
  const [state, dispatch] = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const classes = useStyles();
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { name: username, email: email }
    if (data.name && data.email) {
      createNewUser(data)
        .then(data => {
          dispatch({ type: "SET_CURRENT_USER", currentUser: data.data })
          updateUsers()
          setUsername("")
          setEmail("")
        })
        .catch(error => console.log(error))
      history.push("/mission-control")
    } else {
      alert("Please add your name and email to signup.")
    }
  };

  const updateUsers = () => {
    // no longer in state
    // getAllUsers()
    //   .then(data => dispatch({ type: "FETCH_USERS", users: data.data }))
    //   .catch(error => console.log(error))
  }

  const handleInput = (e) => {
    if (e.target.name === "username") { setUsername(e.target.value) }
    if (e.target.name === "email") { setEmail(e.target.value) }
    if (e.target.name === "password") { setPassword(e.target.value) }
  };

  return (
    <div>
      <form className={classes.form}>
        <input
          type="text"
          placeholder="Name"
          name="username"
          value={username}
          className={classes.input}
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          className={classes.input}
          onChange={handleInput}
        />
        {/* <input
          type="text"
          placeholder="Password"
          value={password}
          className={classes.input}
          onChange={handleInput}
        /> */}
      <button value="signup" className={classes.submit} onClick={handleSubmit}>SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUp;
