import React, { useState, useEffect, useContext } from "react";
import AppContext from '../../modules/App/AppContext'
import {getUserById, getParentById} from '../common/apiCalls'
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import { makeStyles } from "@material-ui/core/styles";
import KiddoCard from '../../ui/card/Card'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


const useStyles = makeStyles(theme => ({
  container: {},
  title: {},
}))


const AccountsView = () => {
  const [children, setChildren] = React.useState([]);
  const [sessionUser, setSessionUser] = useState(null)
  const [state, dispatch] = useContext(AppContext);
  const classes = useStyles()

  useEffect(() => {
    if (state.parentId) {
      updateParent()
    }
  },[state.parentId])

  useEffect(() => {
    if (sessionUser) fetchChildren()
  },[sessionUser])

  const updateParent = async () => {
    const parent = await getParentById(+state.parentId)
    console.log(parent.data)
    const action = { type: `SET_CURRENT_USER`, currentUser: parent.data }
    dispatch(action)
    setSessionUser(parent.data)
  }

  const fetchChildren = async () => {
    const childIds = sessionUser.relationships.users.data
    if (childIds){
      const fetchedKids = await childIds.reduce(async (promises, cid) => {
        const allChildren = await promises
        const child = await getUserById(cid.id)
        allChildren.push(child)
        return allChildren
      }, [])
      setChildren(fetchedKids)
    }
  }

  const renderCards = () => {
    console.log(children);
    return children.map((c,i) => 
      <KiddoCard key={i} child={c.data}/>
    )
  }

  const firstUX = () => {
    return (
      <div>
        <PageContainer justify={'flex-start'} className={classes.container}>
          <Link to='/parent-view'>
            <Button>Add some children accounts!</Button>
          </Link>
        </PageContainer>
      </div>
    )
  }

  if (!children.length) return firstUX()

  if (children.length) return ( 
    <div style={{ height: "100%", paddingBottom: '2em' }}>
      <PageContainer justify={'flex-start'} className={classes.container}>
        <TitleContainer className={classes.title}><h1 style={{fontSize: '2em', marginTop: '.4em', marginBottom: '1em', color: 'gold' }}>Account Selection</h1></TitleContainer>
        <div style={{flexWrap: 'wrap', display: 'flex', background: '', width: '100%', justifyContent: 'center'}}>
          {renderCards()}
        </div>
      </PageContainer>
    </div>
   );
}
 
export default React.memo(AccountsView);