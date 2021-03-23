import React, { useState, useEffect } from "react";
import { TitleContainer } from "../../ui/containers/index";
import { FormHelperText, TextField, Button } from "@material-ui/core";

const RewardForm = ({ parentId, children, childId, handleRewardSubmit }) => {
  const [rewardName, setRewardName] = React.useState("");
  const [rewardDescription, setRewardDescription] = React.useState("");
  const [rewardPoints, setRewardPoints] = React.useState("");
  const [ready, setReady] = React.useState(false);

  useEffect(() => {
    if (rewardName && rewardDescription && rewardPoints && childId) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [rewardName, rewardDescription, rewardPoints, childId]);

  const submitReward = () => {
    const rewardObject = {
      title: rewardName,
      points_to_redeem: rewardPoints,
      parent_id: parentId,
      user_id: childId,
      description: rewardDescription,
    };
    handleRewardSubmit(rewardObject);
    clearInputs();
  };

  const clearInputs = () => {
    setRewardName("");
    setRewardDescription("");
    setRewardPoints("");
  };

  return (
    <>
      <TitleContainer>
        <h1
          style={{ fontSize: "1em", marginTop: ".4em", marginBottom: ".1em" }}
        >
          Add a Parent Reward
        </h1>
      </TitleContainer>
      <FormHelperText style={{ margin: "1em", textAlign: "center" }}>
        Your KidDo agent will collect points by completing tasks.
        <br />
        Once they have enough points, they can purchase your reward!
      </FormHelperText>
      <TextField
        style={{ marginBottom: ".3em" }}
        id="reward-name-input"
        label="Reward Name"
        placeholder="Add a simple name for this reward"
        variant="outlined"
        value={rewardName}
        onChange={(event) => setRewardName(event.target.value)}
      />
      <TextField
        style={{ marginBottom: ".3em" }}
        id="reward-description-input"
        label="Reward Description"
        placeholder="What are the details of this reward?"
        variant="outlined"
        value={rewardDescription}
        onChange={(event) => setRewardDescription(event.target.value)}
      />
      <TextField
        style={{ marginBottom: ".3em" }}
        id="reward-cost-input"
        type="number"
        pattern="[0-9]+-"
        label="Reward Point Value"
        placeholder="Tasks average 5 points each"
        variant="outlined"
        value={rewardPoints}
        onChange={(event) => setRewardPoints(event.target.value)} //TODO no decimals allowed
      />
      <FormHelperText style={{ textAlign: "center" }}>
        Remember each preloaded task is worth between 5-10 points!
      </FormHelperText>

      {children}
      <Button
        style={{ margin: "1em" }}
        disabled={ready ? false : true}
        variant="contained"
        onClick={submitReward}
        color="primary"
      >
        {ready ? "Add Reward!" : "Add more reward details"}
      </Button>
    </>
  );
};

export default React.memo(RewardForm);
