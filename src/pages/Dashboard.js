import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
   <>
    <div>Dashboard</div>
    <Link to="/profile">Profile</Link>
    <Link to="/auth">Home</Link>
   </>
  )
}

export default Dashboard