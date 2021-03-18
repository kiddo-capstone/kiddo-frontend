import React, { useState, useEffect, useContext } from "react";
import AppContext from '../../modules/App/AppContext'
import {getUserById, getParentById} from '../common/apiCalls'
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import { makeStyles } from "@material-ui/core/styles";
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
    if (state.currentUser.type === 'user') {
      updateParent()
    }
  },[])

  useEffect(() => {
    if (state.currentUser?.relationships) fetchChildren()
  },[state.currentUser])

  const updateParent = async () => {
    const parentId = state.currentUser.attributes.parent_id
    const parent = await getParentById(parentId)
    const action = { type: `SET_CURRENT_USER`, currentUser: parent.data }
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