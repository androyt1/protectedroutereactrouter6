import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({authenticate}) => {

    const navigate = useNavigate()
    const handleAuth = () => {
        authenticate()
        navigate('/profile')
    }
  return (
    <>
        <div>
            <h2>Authentication Page</h2>
            <button onClick={handleAuth}>Authenticate</button>
        </div>
    </>
  )
}

export default Auth