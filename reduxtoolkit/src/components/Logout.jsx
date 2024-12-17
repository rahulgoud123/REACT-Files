import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/userSlice'

const Logout = () => {
  const{user,isLogin}=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  if(!isLogin){
    return <p>Please provide email id</p>
  }

  return (
    <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <button onClick={()=>dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Logout