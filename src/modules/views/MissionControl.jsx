import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import PageContainer from "../../ui/containers/PageContainer";
import TitleContainer from "../../ui/containers/TitleContainer";

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext);
  const { colors, shadows, gradients, fonts } = state.theme;

  return (
    <PageContainer>
      <TitleContainer>
        <h1>I'm a Mission Control Component</h1>
      </TitleContainer>
    </PageContainer>
  );
};

// .memo supposedly assists with caching - trying it out
export default React.memo(MissionControl);
