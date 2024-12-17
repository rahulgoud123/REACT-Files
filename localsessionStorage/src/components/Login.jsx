import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
       e.preventDefault()
       const storeEmail=localStorage.getItem('email')
       const storePassword=localStorage.getItem('password')

       if(email==storeEmail && password==storePassword){
        localStorage.setItem('isLogin',true)
        navigate('/dashboard')
       }else{
        alert('Invalid Credentials')
       }
    }
  return (
    <div>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login