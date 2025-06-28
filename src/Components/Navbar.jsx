import React from 'react'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
     
    const { username , LogOut } = useAuth();
  return (
    <nav>
        <h2>My App</h2>
        {username ? (
            <>
            <span>Welcome, {username}</span>
            <button onClick={LogOut}>Logout</button>
            </>
        ):(
            <span>
                please log in
            </span>
        )}
    </nav>
  )
}

export default Navbar
