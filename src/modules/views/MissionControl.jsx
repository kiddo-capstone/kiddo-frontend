import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import PageContainer from "../../ui/containers/PageContainer";
import TitleContainer from "../../ui/containers/TitleContainer";
import Button from "../../ui/button/Button";
import { Link } from "react-router-dom";

const MissionControl = props => {
  const [state, dispatch] = useContext(AppContext);
  const { colors, shadows, gradients, fonts } = state.theme;

  return (
    <PageContainer>
      <TitleContainer>
        <h1>I'm a Mission Control Component</h1>
        <Link title="Mission" to="daily-mission">
          <Button>Go to mission</Button>
        </Link>
      </TitleContainer>
    </PageContainer>
  );
};

// .memo supposedly assists with caching - trying it out
export default React.memo(MissionControl);
