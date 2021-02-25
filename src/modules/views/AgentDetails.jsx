import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
// import { art, heart, explore } from "../../assets/index";
import ProgressBar from "../../ui/progressBar/progressBar";

const appStyles = theme;

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceAround",
  },
  card: {
    height: "450px",
    boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    backgroundColor: "#3e4453",
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "50px",
    height: "30%",
    background: `linear-gradient(to top, ${appStyles.colors.yellow}, ${appStyles.colors.red})`,
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
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      // objectFit: "cover"
    },
  },
  icon: {
    alignSelf: "center",
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
      fontFamily: appStyles.fonts.primary,
      color: appStyles.colors.white,
    },
  },
  statBox: {
    // paddingTop: "10px"
  },
  statRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
}));

const stats = [
  { barColor: appStyles.colors.yellow, completed: 60 },
  { barColor: appStyles.colors.yellow, completed: 30 },
  { barColor: appStyles.colors.yellow, completed: 53 },
];

const AgentDetails = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  const allUsers = state.users;

  const [user, setUser] = useState(null);

  const getUserById = (users, id) => {
    const foundUser = users.find((user) => +user.id === id);
    // console.log(foundUser);
    return foundUser;
  };
  
  useEffect(() => {
    const newUser = getUserById(allUsers, 1);
    setUser(newUser)
  }, []);
 
  return (
    <section className={classes.section}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <div className={classes.avatar}>
            <img src="https://image.freepik.com/free-vector/little-kid-avatar-profile_18591-50928.jpg" />
          </div>

          <span className={classes.titleText}>
    {/* Commented out due to issues holding onto user in state: */}
            {/* <h1>{user.attributes.name}</h1> */} 
          </span>

          <hr />

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
      <span style={{ textAlign: "center", color: appStyles.colors.yellow }}>
        <h2>STATS</h2>
      </span>

      <div className={classes.statBox}>
        {stats.map((item, idx) => (
          <div className={classes.statRow}>
            <div className={classes.icon}>❤️</div>
            <ProgressBar
              key={idx}
              barColor={item.barColor}
              completed={item.completed}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(AgentDetails);
