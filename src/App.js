import React,{useState,useEffect} from 'react'
import Dashboard from './pages/Dashboard'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import { Routes, Route, Navigate } from 'react-router-dom'

const App = () => { 

  const[auth,setAuth] = useState(false) 
  console.log("auth",auth)
  useEffect(()=>{
    let user=localStorage.getItem('user')
    user && JSON.parse(user) ? setAuth(true) : setAuth(false)
  } ,
  [])
  useEffect(()=>{
    localStorage.setItem('user',auth)
  },[auth])
  return (
    <>
      <Routes>
        {!auth && (
        <Route path="/auth" element={<Auth authenticate={()=>setAuth(true)} />} />
        )}
        {auth && (<>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile logout={()=>setAuth(false)} />} />
        </>
        )}
        <Route path='*' element={<Navigate to={auth ? "/profile":"/auth"} />} />
      </Routes>
    </>
  )
}

export default App