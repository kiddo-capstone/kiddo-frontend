import { useContext, useEffect, useState } from "react";
import { getRewardsByUserId, redeemReward } from "../common/apiCalls";
import { PageContainer } from "../../ui/containers";
import AppContext from "../App/AppContext";
import RewardCard from "../rewards/RewardCard";
import { coin } from "../../assets/index";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import SpinningCoin from "../../ui/animations/SpinningCoin";

const appStyles = theme;

const useStyles = makeStyles(() => ({
coin: {
  height: "45px",
  paddingLeft: "20px",
  animation: "spin 2s infinite"
  /* -moz-transition: all .2s linear,
  -webkit-transition: all .2s linear,
  transition: all .2s linear, */

  // "&:hover": {
  //   paddingRight: "20px",
  //   "-ms-transform": "rotate(-180deg)",
  //   "-moz-transform": "rotate(-180deg)",
  //   "-webkit-transform": "rotate(-180deg)",
  //   transform: "rotate(-180deg)",
  //   }
  },
  "@keyframes spin" : {
    transform: "rotate(-180deg)"
    
  }

}))

const RewardStore = ({ id }) => {
  const classes = useStyles()
  const [rewards, setRewards] = useState([])
  const [state, dispatch] = useContext(AppContext)

  useEffect(() => {
    getRewardsByUserId(id)
      .then(data => setRewards(data.data))
      .catch(error => console.log(error))
  }, [])

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
      <SpinningCoin/>
      <img src={coin.img} alt="gold coin" className={classes.coin}/>
      <h2>Click "Buy" to Purchase Your Reward!</h2>
      { makeRewardCards() }
    </PageContainer>
  )
}

export default RewardStore;