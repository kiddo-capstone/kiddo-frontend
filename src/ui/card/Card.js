import React, {useContext, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppContext from '../../modules/App/AppContext'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import kids_trio from '../../assets/kids_trio.png'

const useStyles = makeStyles({
  root: {
    maxWidth: '30%',
    width: '12em',
    minWidth: 200,
  },
});


function KiddoCard({child: {id, type, attributes: {name, parent_id, points}}}) {
  const [state, dispatch] = useContext(AppContext);
  const [missions, setMissions] = useState([])
  const [avatar, setAvatar] = useState(null)
  const classes = useStyles();

  useEffect(() => {
    const userMissions = state.missions.filter(m => m.attributes.user_id === +id)
    setMissions(userMissions)
    // console.log(missions)
    // getAvatar() 
  }, [])
    
  const getAvatar = async () => {
    const parsed = name.replace(' ', '+')
    const promAvatar = await fetch(`https://ui-avatars.com/api/?name=${parsed}`)
      // .then((res) => res.json());
    console.log(promAvatar);
  };

  // return userMissions.map(m => (<Mission key={m.id} props={m} />))

  return (
    <Card style={{margin: '.6em', filter: 'drop-shadow(2px 4px 6px black)'}} className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="a smiling profile photo"
          height="200"
          image={`https://ui-avatars.com/api/?background=random&name=${name.replace(' ', '+')}`}
          title="KidDo User"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Agent Name: {name}
          </Typography>
          <Typography style={{display: 'flex', flexDirection: 'column'}} variant="body2" color="textSecondary" component="p">
            <span>Total Points: {points}</span>
            <span>Missions: {missions.length}</span>
            <span>Completed Tasks: {missions.length}</span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(KiddoCard);