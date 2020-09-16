import React, { useState } from 'react'

const User = ({user, searchUser, users, setUsers }) => {
    const [id, setId] = useState('')

    const handleClick = () => {
        setUsers([...users].splice(users.findIndex(el => el.key === id),1))
    }
    return (
        <div className="users" onMouseEnter={() => setId(user.id)} onMouseLeave={() => setId('')}>
                <img src={user.avatar} alt={user.first_name} width="100px"/>
                <p>First Name : {user.first_name}</p>
                <p>Last Name : {user.last_name}</p>
                <p>email : {user.email}</p>
                {searchUser !== '' ? <button onClick={handleClick}>X</button> : null}
        </div>
    )
}
export default User