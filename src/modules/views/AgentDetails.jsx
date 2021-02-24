import TitleContainer from "../../ui/containers/TitleContainer";
import React, { useContext } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import { art, heart, explore } from "../../assets/index";
import Divider from "@material-ui/core/Divider";
import ProgressBar from "../../ui/progressBar/ProgressBar";

const appStyles = theme;

// appStyles.colors.background (should be soft black) is not rendering
// hex code is "#282c34"

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceAround",
  },
  card: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: 'spaceAround',
    height: "450px",
    // border: `6px solid ${appStyles.colors.background}`,
    // borderRadius: "10px",
    // boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    backgroundColor: "#3e4453",
    // background: `linear-gradient(to top, ${appStyles.colors.red}, ${appStyles.colors.primary})`
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "30%",
    // border: `6px solid ${appStyles.colors.primaryAccent}`,
    background: `linear-gradient(to top, ${appStyles.colors.yellow}, ${appStyles.colors.red})`,
    // background: "#3e4453",
    backgroundSize: "cover",
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
    color: appStyles.colors.yellow,
  },
  avatar: {
    margin: "auto",
    position: "relative",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    // boxShadow: `0 0 0 3px ${appStyles.colors.background}`,
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      // objectFit: "cover"
    },
  },
  icon: {
    alignSelf: "center"
  },
  table: {
    marginTop: "10px",
    width: "100%",
    fontSize: "20px",
    color: appStyles.colors.yellow,
    marginLeft: "10px",
    textAlign: "left",

    "& th": {
      color: appStyles.colors.yellow,
    },
    "& td": {
      // backgroundColor: appStyles.colors.grey1,
      fontFamily: appStyles.fonts.primary,
      color: appStyles.colors.white,
    },
  },
  statBox: {
    // paddingTop: "10px"
    // display: "flex",
    // flexDirection: "column",
    // margin: "auto",
    // position: "relative",
    // justifyContent: "space-around"
  },
  statRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
  
}));

const stats = [
  { barColor: appStyles.colors.yellow, completed: 60 },
  { barColor: appStyles.colors.yellow, completed: 30 },
  { barColor: appStyles.colors.yellow, completed: 53 },
];

const AgentDetails = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  // const {props: { attributes: { name, due_date, user_id, created_at, updated_at }}} = props
 
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.avatar}>
            <img src="https://image.freepik.com/free-vector/little-kid-avatar-profile_18591-50928.jpg" />
          </div>

          <span className={classes.titleText}>
            <h1>AGENT SALLY</h1>
          </span>
       
          <hr/>

          <table className={classes.table}>
            <tbody>
              <tr>
                <th>Date:</th>
                <td>2-21-2021</td>
              </tr>
              <tr>
                <th>Agent Status:</th>
                <td>😃</td>
              </tr>
              <tr>
                <th>Points:</th>
                <td>60</td>
              </tr>
              <tr>
                <th>Reward:</th>
                <td>Pizza Party 100pts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <span style={{textAlign: "center", color: appStyles.colors.yellow}}>
            <h2>STATS</h2>
          </span>

      <div className={classes.statBox}>
          {/* <ProgressBar
            completed={10}
            barColor={appStyles.colors.yellow}
          /> */}
          {stats.map((item, idx) => (
            <div className={classes.statRow}>
            <div className={classes.icon}>❤️</div>
        <ProgressBar key={idx} barColor={item.barColor} completed={item.completed} />
        </div>
      ))}
      </div>
    </section>
  );
};

export default React.memo(AgentDetails);
