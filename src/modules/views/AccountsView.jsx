import React, { useState, useEffect, useContext } from "react";
import AppContext from '../../modules/App/AppContext'
import {getUserById, getParentById} from '../common/apiCalls'
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import KiddoCard from '../../ui/card/Card'

const useStyles = makeStyles(theme => ({
  container: {},
  title: {},
}))


const AccountsView = () => {
  const [children, setChildren] = React.useState([]);
  const [state, dispatch] = useContext(AppContext);
  const classes = useStyles()

  useEffect(() => {
    if (!state.currentUser || +state.currentUser.id !== 4) { // TODO remove this code and update once user sign in flow complete
      updateUser()
    }
  },[])

  useEffect(() => {
    if (state.currentUser?.relationships) fetchChildren()
  },[state.currentUser])

  const updateUser = async () => {
    const user = await getParentById(4)
    const action = { type: `SET_CURRENT_USER`, currentUser: user.data }
    dispatch(action)
  }

  const fetchChildren = async () => {
    const childIds = state.currentUser.relationships.users.data
    const fetchedKids = await childIds.reduce(async (promises, cid) => {
      const allChildren = await promises
      const child = await getUserById(cid.id)
      allChildren.push(child)
      return allChildren
    }, [])
    setChildren(fetchedKids)
  }

  const renderCards = () => {
    console.log(children);
    return children.map((c,i) => 
      <KiddoCard key={i} child={c.data}/>
    )
  }

  return ( 
    <div style={{ backgroundColor: "lightgray", height: "100%", paddingBottom: '2em' }}>
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