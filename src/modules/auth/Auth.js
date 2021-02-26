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
      onClick={() => logout({ returnTo: window.location.origin + "/mission-control" })}>
      Log Out
    </Button>
  );
};

const Auth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </>
  );
};

export default React.memo(Auth);
