import React from 'react'
import User from './User'

const Users = ({users, searchUser, setUsers}) => {
    return (
        users.filter(user => user.first_name.toLowerCase().includes(searchUser)).map(user => 
            <User key={user.id} user={user} users={users} searchUser={searchUser} setUsers={setUsers} />)
    )
}

export default Users