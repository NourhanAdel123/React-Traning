import React from 'react'
import { useAuth } from '../context/AuthContext'

const Login = () => {

    const {username , Login} = useAuth();

    if (username) return null;
  return (
    <div>
        <button onClick={() => Login("Nourhan")}>Login as Nourhan</button>
    </div>
  )
}

export default Login
