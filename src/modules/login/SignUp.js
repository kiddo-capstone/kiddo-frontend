import React, { useContext, useEffect, useState } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import ModalWrapper from "../../ui/modal/ModalWrapper";

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
    console.log("closed!");
  };

  const handleSubmit = () => {
    console.log("make POST user call");
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
    <ModalWrapper
      btnMessage={"Sign up"}
      // handleClose={handleClose}
      open={open}
      handleClickOpen={handleClickOpen}
    >
      <div>
        <form onSubmit={handleSubmit}>
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
    </ModalWrapper>
  );
};

export default SignUp;
