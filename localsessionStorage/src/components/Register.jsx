import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem('username',username)
        localStorage.setItem('email',email)
        localStorage.setItem('password',password)
        alert('Registration is successful')
        navigate('/login')
    }
  return (
    <div>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <label>Email:</label>
            <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label>Password:</label>
            <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register