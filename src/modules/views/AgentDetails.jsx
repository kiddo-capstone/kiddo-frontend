import TitleContainer from "../../ui/containers/TitleContainer";
import React, { useContext } from "react";
import AppContext from "../app/AppContext";

const AgentDetails = () => {
  return (
    <div>
      <TitleContainer>
        <h1>Agent Name</h1>
      </TitleContainer>
        <img src="http://www.clker.com/cliparts/6/8/2/d/15164313681889389218spy-kids-gadgets-clipart.hi.png" />
    </div>
  );
};

export default React.memo(AgentDetails);