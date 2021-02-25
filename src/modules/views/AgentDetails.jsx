import React, { useContext, useState, useEffect } from "react";
import AppContext from "../app/AppContext";
import { makeStyles } from "@material-ui/core";
import theme from "../../ui/common/theme";
import kids from "../../assets/kids_trio.png";
import ProgressBar from "../../ui/progressBar/ProgressBar";
import Auth from "../auth/Auth";

const appStyles = theme;

const useStyles = makeStyles(() => ({
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceAround",
  },
  card: {
    height: "auto",
    boxShadow: "0 10px 25px 5px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    backgroundColor: "#3e4453",
  },
  cardHeader: {
    position: "relative",
    paddingTop: "50px",
    paddingBottom: "20px",
    height: "30%",
    background: appStyles.colors.grey3,
    // background: `linear-gradient(to top, ${appStyles.colors.green}, ${appStyles.colors.red})`,
    backgroundSize: "cover",
  },
  titleText: {
    fontFamily: appStyles.fonts.primary,
    fontSize: "20px",
    textAlign: "center",
    color: appStyles.colors.green,
  },
  avatar: {
    margin: "auto",
    position: "relative",
    background: appStyles.colors.white,
    padding: "1em",
    marginBottom: "0.7em",
    width: "220px",
    height: "200px",
    borderRadius: "50%",
    border: `5px solid ${appStyles.colors.darkGrey}`,
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    },
  },
  icon: {
    alignSelf: "center",
  },
  table: {
    marginTop: "10px",
    width: "100%",
    fontSize: "20px",
    color: appStyles.colors.green,
    marginLeft: "10px",
    textAlign: "left",

    "& th": {
      color: appStyles.colors.green,
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
  { barColor: appStyles.colors.red, completed: 60 },
  { barColor: appStyles.colors.red, completed: 30 },
  { barColor: appStyles.colors.red, completed: 53 },
];

const AgentDetails = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);
  const allUsers = state.users;

  const [user, setUser] = useState(null);

  const getUserById = (users, id) => {
    return users.find((user) => +user.id === id);
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
            <img src={kids} />
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
                <td>{ new Date().toLocaleDateString() }</td>
              </tr>
              <tr>
                <th>Agent Status:</th>
                <td>😃</td>
              </tr>
              <tr>
                <th>Points:</th>
                <td>60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <span style={{ textAlign: "center", color: appStyles.colors.white }}>
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
      <Auth />
    </section>
  );
};

export default React.memo(AgentDetails);
