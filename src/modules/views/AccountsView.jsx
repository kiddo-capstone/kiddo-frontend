import React, { useState, useEffect, useContext } from "react";
import AppContext from '../../modules/App/AppContext'
import {getUserById, getParentById} from '../common/apiCalls'
import { PageContainer, TitleContainer } from "../../ui/containers/index";
import KiddoCard from '../../ui/card/Card'
import LoadingAnimation from '../common/LoadingAnimation'
import {Button} from "@material-ui/core";
import {Link} from 'react-router-dom'

const kiddoParentId = JSON.parse(localStorage.getItem("kiddoParentId"));

const AccountsView = () => {
  const [children, setChildren] = React.useState([]);
  const [sessionUser, setSessionUser] = useState(null)
  const [state, dispatch] = useContext(AppContext);
    
  useEffect(() => {
    if (!state.parentId) {
      const action = { type: `SET_PARENT_ID`, parentId: kiddoParentId }
      dispatch(action)  
    }
    if (state.parentId || kiddoParentId) {
      updateParent()
    }
  },[state.parentId])

  useEffect(() => {
    if (sessionUser) fetchChildren()
  },[sessionUser])

  const updateParent = async () => {
    const parent = await getParentById(+state.parentId ? +state.parentId : kiddoParentId)
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
    if (!state.currentUser?.relationships?.users?.data?.length) return (
      <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <div style={{width: '80%'}}>
          <p>
            Looks like there are no KidDo Agents registered to this account.
            Go to <b style={{color: 'gold'}}>HQ</b> (Parent Dashboard) to add a new KidDo agent and to assign missions!
          </p>
        </div>
        <Link to='/parent-view' style={{textDecoration: 'none'}}>
          <Button style={{margin: '1em'}} variant="contained" color="primary">Go to HQ!</Button>
        </Link>
      </div>
    )
    if (!children.length) return (
      <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <div style={{width: '80%'}}>
          <p>
            Retrieving KidDo Agents from HeadQuarters...
          </p>
          <LoadingAnimation />
        </div>        
      </div>
    )
    return children.map((c,i) => 
      <KiddoCard key={i} child={c.data}/>
    )
  }


  return ( 
    <div style={{ height: "100%", paddingBottom: '2em' }}>
      <PageContainer justify={'flex-start'} >
        <TitleContainer ><h1 style={{fontSize: '2em', marginTop: '.4em', marginBottom: '1em', color: 'gold' }}>Account Selection</h1></TitleContainer>
        <div style={{flexWrap: 'wrap', display: 'flex', background: '', width: '100%', justifyContent: 'center'}}>
          {renderCards()}
        </div>
      </PageContainer>
    </div>
   );
}
 
export default React.memo(AccountsView);