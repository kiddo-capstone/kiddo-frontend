import { useContext } from "react"
import RoundButton from "../../ui/button/RoundButton"
import AppContext from "../App/AppContext"
import { redeemReward } from "../common/apiCalls";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import Button from "../../ui/button/Button";
import GoldCoinRain from "../../ui/animations/goldCoinRain";

const appStyles = theme

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    boxSizing: "border-box",
    width: "200px",
    textAlign: "center",
    backgroundColor: appStyles.colors.red,
    border: "solid 4px lightgrey",
    borderRadius: "5px",
    backgroundColor: "#3e445296",
    fontSize: "16px",
    padding: "30px 10px 20px 10px",
    transition: "ease .3s",
    "&:hover": {
      boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.4)",
      transform: "scale(1.05, 1.05)"
    }
  },
  task: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: `solid 4px ${appStyles.colors.yellow}`,
    borderRadius: "5px",
    backgroundColor: "#3e445296",
    textAlign: "center",
    height: "100%",
    fontSize: "clamp(10px, 1.75rem, 4vmin)",
    color: "white",
    padding: "1.5em",
    transition: "ease .3s",
  },
  pulse: {
    zIndex: 0,
    // animation: "$pulse infinite alternate .75s ease",
    color: "lightgreen !important",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(1.3)",
    },
    "100%": {
      transform: "scale(1.4)",
    },
  },
  }))
const RewardCard = ({ reward }) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);

  const checkForPurchase = (pointValue) => {
    // if (state.currentUser?.attributes.points >= pointValue) {
    if (!reward.attributes.redeemed) {
      return (
        <Button style={{zIndex: 100, width: 'fit-content'}} onClick={() => redeem()}>Redeem Reward!</Button>
      )
    }
  }

  const redeem = () => {
    redeemReward(+reward.id, {"redeemed": true})
    .then(setRedemption())
  }

  const setRedemption = () => {
    const action = {type: "SET_REDEEMED", redeemed: true}
    dispatch(action)
  }

  return (
    <div className={classes.card}>
      <h3>{reward.attributes.title}</h3>
      <p>{reward.attributes.description}</p>
      <p style={{color: appStyles.colors.yellow, fontSize: "18px"}}>{reward.attributes.redeemed ? "REDEEMED" : `💰 X ${reward.attributes.points_to_redeem}`}</p>
      <div className={classes.pulse}>
        {checkForPurchase(reward.attributes.points_to_redeem)}
      </div>
    </div>
  )
}

export default RewardCard;