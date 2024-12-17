import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

const Login = () => {
    const dispatch=useDispatch()

    const handleClick=()=>{
        const userData={id:1,name:'john',email:'john@test.com'}
        dispatch(login(userData))
    }
  return (
    <div>
        <h3>Logi status</h3>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login