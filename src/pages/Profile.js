import React from 'react'
import { Link } from 'react-router-dom'

const Profile = ({logout}) => {
  return (
    <>
    <div>
      <h2>Profile Page</h2>
      <Link to="/dashboard">Dashboard</Link> <br/><br/>
      <button onClick={logout}>Logout</button>
    </div>
    </>
  )
}

export default Profile