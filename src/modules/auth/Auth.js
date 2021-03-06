import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../ui/button/Button";
import {PageContainer} from '../../ui/containers/index'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button primary={true} onClick={() => loginWithRedirect()}>Log In</Button>;
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      primary={true}
      onClick={() => logout({ returnTo: window.location.origin + "/" })}>
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
    <PageContainer>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </PageContainer>
  );
};

export default React.memo(Auth);
