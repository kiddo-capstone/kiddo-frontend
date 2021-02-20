import React, { useContext } from "react";
import AppContext from "../App/AppContext";

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext)

  return (
    <div>
      <h1>I'm a Mission Control Component</h1>
    </div>
  );
};

// .memo supposedly assists with caching - trying it out
export default React.memo(MissionControl);