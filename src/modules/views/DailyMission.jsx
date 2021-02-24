import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { getMissionById } from "../common/apiCalls";

import PageContainer from "../../ui/containers/PageContainer";
import TitleContainer from "../../ui/containers/TitleContainer";

const useStyles = makeStyles(theme => ({}));

const DailyMission = props => {
  const [state, dispatch] = useContext(AppContext);
  const [error, setError] = useState(null);
  const { id } = props;

  useEffect(async () => {
  await getMissionById(id)
    .then(data => addMissionToState('selectedMission', data.data))
    .catch(error => setError(error))
  }, [])

  const addMissionToState = (type, data) => {
    const action = { type: `FETCH_SELECTED_MISSION`, selectedMission: data }
    dispatch(action)
  }


  return (
    <PageContainer>
      <TitleContainer>
        <h1>{id}</h1>
      </TitleContainer>
    </PageContainer>
  );
};

export default React.memo(DailyMission);
