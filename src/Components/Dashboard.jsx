import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { username } = useAuth();

  if(!username) return <h3>You must be logged in to view the dashboard</h3>
  return <h3> This is your dashboard, {username}</h3>
}

export default Dashboard
