import React, { useContext, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../ui/button/Button";
import AppContext from "../App/AppContext";
import { createNewParent, getAllParents } from "../common/apiCalls";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button primary onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      primary
      onClick={() => logout({ returnTo: window.location.origin + "/" })}>
      Log Out
    </Button>
  );
};

const MiniAuth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [state, dispatch] = useContext(AppContext);

  useEffect(async () => {
    if (isAuthenticated) {
      const userDetails = {
        name: user.name ? user.name : user.email.split("@")[0],
        email: user.email,
      };

      const matchedParent = await checkRegistered();
      if (matchedParent) {
        dispatch({ type: "SET_CURRENT_USER", currentUser: matchedParent });
        dispatch({ type: "SET_PARENT_ID", parentId: matchedParent.id });
        localStorage.setItem("kiddoParentId", JSON.stringify(matchedParent.id));
        return;
      } else {
        const newParent = await createNewParent(userDetails);
        dispatch({ type: "SET_CURRENT_USER", currentUser: newParent.data });
        dispatch({ type: "SET_PARENT_ID", parentId: newParent.data.id });
        localStorage.setItem("kiddoParentId", JSON.stringify(newParent.data.id));
        console.log("created new parent", userDetails);
      }
    }
  }, [isAuthenticated]);

  const checkRegistered = async () => {
    const parents = await getAllParents();
    const match = await parents.data.find(
      p => p.attributes.email.toLowerCase() === user.email.toLowerCase()
    );
    return match;
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <span style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
    </span>
  );
};

export default React.memo(MiniAuth);
