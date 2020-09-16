import React from 'react'

const Filter = ({setSearchUser}) => {
    
    return (
        <input type="text" placeholder="search.." onChange={(e) => setSearchUser(e.target.value)}></input>
    )
}

export default Filter