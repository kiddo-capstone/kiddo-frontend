import React from "react";
import { PageContainer, TitleContainer } from "../../ui/containers/index";
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

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      {isAuthenticated && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

const Auth = ({isAuthenticated}) => {
  return (
    <>
      <TitleContainer>{!isAuthenticated ? 'Click below to log into your account' : 'Click below to log out of your account'}</TitleContainer>
      <Profile />
    </>
  );
};

export default React.memo(Auth);
