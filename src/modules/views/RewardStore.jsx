import { useContext, useEffect, useState } from "react";
import { getRewardsByUserId, redeemReward } from "../common/apiCalls";
import { PageContainer } from "../../ui/containers";
import AppContext from "../App/AppContext";
import RewardCard from "../rewards/RewardCard";

const RewardStore = ({ id }) => {
  const [rewards, setRewards] = useState([])
  const [state, dispatch] = useContext(AppContext)

  useEffect(() => {
    getRewardsByUserId(id)
      .then(data => setRewards(data.data))
      .catch(error => console.log(error))
  }, [])

  const redeemRewardPoints = () => {
    
  }

  const makeRewardCards = () => {
    if (rewards.length > 0) {
      return rewards.map(reward => {
        return <RewardCard key={reward.id} reward={reward}/>
      })
    }
  }

  return (
    <PageContainer>
      <h1>Reward Store</h1>
      { makeRewardCards() }
    </PageContainer>
  )
}

export default RewardStore;