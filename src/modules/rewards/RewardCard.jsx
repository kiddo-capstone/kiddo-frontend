import { useContext } from "react"
import RoundButton from "../../ui/button/RoundButton"
import AppContext from "../App/AppContext"
import { redeemReward } from "../common/apiCalls";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    boxSizing: "border-box",
    textAlign: "left",
    backgroundColor: "#665c5c",
    borderRadius: "10px",
    color: "white",
    fontSize: "16px",
    padding: "30px 10px 20px 10px",
}
  }))
const RewardCard = ({ reward }) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  const checkForPurchase = (pointValue) => {
    if (state.currentUser?.attributes.points >= pointValue) {
      return (
        <button onClick={() => redeem()}>Buy</button>
      )
    }
  }

  const redeem = () => {
    const updates = {
      title: reward.attributes.title,
      points_to_redeem: reward.attributes.points_to_redeem,
      redeemed: true
    }
    console.log(updates)
    redeemReward(reward.id, updates)
    .then(data => console.log(data))
  }

  return (
    <div className={classes.card}>
      <h3>{reward.attributes.title}</h3>
      <p>{reward.attributes.description}</p>
      <p>X {reward.attributes.points_to_redeem}</p>
      { checkForPurchase(reward.attributes.points_to_redeem)}
    </div>
  )
}

export default RewardCard;