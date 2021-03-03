import React, { useContext, useEffect, useState } from "react";
import AppContext from "../App/AppContext";
import { makeStyles } from "@material-ui/core";
import { createNewUser } from "../common/apiCalls";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
}));

const SignUp = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");

  const handleSubmit = () => {
    // createNewUser(data) where data = name, email
  };

  const handleNewUserName = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };
  const handleNewUserEmail = (e) => {
    setUserEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        {
          //handle error condition
        }
        <label>User Name</label>
        <input
          type="text"
          data-test="username"
          name="username"
          value={username}
          onChange={handleNewUserName}
        />
        <label>Email</label>
        <input
          type="email"
          data-test="email"
          value={email}
          onChange={handleNewUserEmail}
        />
        <input type="submit" value="Sign up" data-test="submit" />
      </form>
    </div>
  );
};

export default SignUp;
