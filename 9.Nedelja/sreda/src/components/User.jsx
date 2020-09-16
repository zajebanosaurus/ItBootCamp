import React, { useState }  from 'react'

const User = ({user, searchUser, users, setUsers }) => {
    const [id, setId] = useState('')

    const handleClick = () => {

        // OVO RADI
        let tmp = [...users]
        tmp.splice(tmp.findIndex(el => el.id === id),1)
        setUsers(tmp)

        // OVO JOK! ALI ZAŠTO?
        // setUsers([...users].splice(users.findIndex(el => el.id === id),1))

        // I OVO
        // let tmp = [...users].splice(users.findIndex(el => el.id === id),1)
        // setUsers(tmp)
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