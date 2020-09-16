import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/filter-users" className="nav-link">Search Users</Link>
        </nav>
    )
}
export default Nav