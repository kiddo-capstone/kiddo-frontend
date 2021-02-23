import React from 'react';
import PageContainer from "../../ui/containers/PageContainer";
import TitleContainer from "../../ui/containers/TitleContainer";

const DailyMission = () => {
  return (
    <PageContainer>
      <TitleContainer>
        <h1>Daily Mission</h1>
      </TitleContainer>
    </PageContainer>
  );
};

export default React.memo(DailyMission);
