import React, { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../ui/button/Button";
import AppContext from "../App/AppContext";
import { createNewParent } from "../common/apiCalls";
import {getAllParents} from '../common/apiCalls'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button primary onClick={() => loginWithRedirect()}>Log In</Button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      primary
      onClick={() => logout({ returnTo: window.location.origin + "/welcome" })}>
      Log Out
    </Button>
  );
};

const MiniAuth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [state, dispatch] = useContext(AppContext);

  useEffect(async () => {
    if (isAuthenticated) { // TODO we should probably use isAuthenticated here, according to their docs
      const userDetails = {
        name: user.name,
        email: user.email
      }

      const matchedParent = await checkRegistered()
      console.log(matchedParent)
      if (matchedParent) {
        dispatch({ type: "SET_CURRENT_USER", currentUser: matchedParent })
        return
      } else {
        createNewParent(userDetails)
          .then(data => dispatch({ type: "SET_CURRENT_USER", currentUser: data.data }))
          .catch(error => console.log(error))
        console.log('created new parent', userDetails)
      }
    }
  }, [isAuthenticated])

  const checkRegistered = async () => {
    const parents = await getAllParents()
    const match = await parents.data.find(p => p.attributes.email.toLowerCase() === user.email.toLowerCase())
    return match
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <span style={{width: '100%',display: 'flex', justifyContent: 'center', marginTop: '1em'}}>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </span>
  );
};

export default React.memo(MiniAuth);
