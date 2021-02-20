import React, { useContext } from "react";
import AppContext from "../app/AppContext";

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext)
  const {colors, shadows, gradients, fonts} = state.theme
  
  return (
    <div>
      <h1>I'm a Mission Control Component</h1>
    </div>
  );
};

// .memo supposedly assists with caching - trying it out
export default React.memo(MissionControl);