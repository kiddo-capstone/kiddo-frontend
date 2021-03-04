import { useContext, useState } from "react";
import SignUp from "./SignUp";
import LoginForm from "./LoginForm";
import AppContext from "../App/AppContext";
import { Link, useHistory } from "react-router-dom";

const UserIndex = () => {
  const [state, dispatch] = useContext(AppContext);
  const [signup, setSignup] = useState(false)
  const history = useHistory()
  
  const logout = () => {
    const action = { type: "SET_CURRENT_USER", currentUser: null }
    dispatch(action)
  }

  return (
    <>
      {signup ?
        <>
          <SignUp />
          <button onClick={() => setSignup(false)}>I already have an account</button>
        </> :
        <>
          <LoginForm />
          <button onClick={() => setSignup(true)}>I need to make an account</button>
        </>
      }
      <>
      {state.currentUser && <button onClick={logout}>Log Out</button>}
      </>
    </>
  )
}

export default UserIndex