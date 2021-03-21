import { useContext, useEffect, useState } from "react";
import { getRewardsByUserId, redeemReward } from "../common/apiCalls";
import { PageContainer } from "../../ui/containers";
import AppContext from "../App/AppContext";
import RewardCard from "../rewards/RewardCard";
import { coin } from "../../assets/index";
import { makeStyles, useTheme } from "@material-ui/core";
import theme from "../../ui/common/theme";
import SpinningCoin from "../../ui/animations/SpinningCoin";

const appStyles = theme;

const useStyles = makeStyles((theme) => ({
title: {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
},
container: {
  display: "grid",
  fontSize: "20px",
  padding: "2em 3em 2em 3em",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "50px",
  [theme.breakpoints.down("sm")]: {
     gridTemplateColumns: "repeat(3, 1fr)",
  },
  [theme.breakpoints.down("xs")]: {
     gridTemplateColumns: "repeat(1, 1fr)",
  },
},
coin: {
  height: "60px",
  margin: "30px",
  alignSelf: "center",
  animation: "$spin infinite ease 2s"
  },
  "@keyframes spin" : {
      "0%": {
      transform: "rotate(180deg)",
    },

    "50%": {
      transform: "rotate(-180deg)",
    },
    "100%": {
      transform: "rotate(180deg)",
    },
    
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
      <div className={classes.title}>
        <img src={coin.img} alt="gold coin" className={classes.coin}/>
      <h1>Reward Store</h1>
      <img src={coin.img} alt="gold coin" className={classes.coin}/>
      </div>
      <h3 style={{fontFamily: appStyles.fonts.secondary, color: appStyles.colors.white}}>Click "Buy" to Purchase Your Reward!</h3>
      <div className={classes.container}>
        { makeRewardCards() }
      </div>
    </PageContainer>
  )
}

export default RewardStore;