import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../ui/button/Button";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button primary={true} onClick={() => loginWithRedirect()}>Log In</Button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      primary={true}
      onClick={() => logout({ returnTo: window.location.origin + "/welcome" })}>
      Log Out
    </Button>
  );
};

const MiniAuth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <span style={{width: '100%',display: 'flex', justifyContent: 'center'}}>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </span>
  );
};

export default React.memo(MiniAuth);
