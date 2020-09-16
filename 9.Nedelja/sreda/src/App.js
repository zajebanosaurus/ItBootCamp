import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {getALlUsers} from './services'

import Nav from './components/Nav';
import Users from './components/Users';
import Filter from './components/Filter';

const App = () => {
  const [users, setUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')

  useEffect( () => {
    getALlUsers().then(res => {
      setUsers(res.data.data)
    })
  }, [])
  return (
    <Router>
      <Nav />
      <Switch>
        
        <Route exact path="/">
          <Users users={users} searchUser={searchUser}/>
        </Route>
        <Route exact path="/filter-users">
          <Filter setSearchUser={setSearchUser} users={users}/>
          <Users users={users} searchUser={searchUser} setUsers={setUsers}/>
        </Route>

      </Switch>

    </Router> 
  )
}

export default App;
