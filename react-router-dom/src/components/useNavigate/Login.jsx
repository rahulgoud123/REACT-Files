import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState('')
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(name=='admin' && password=='admin'){
            navigate('/dashboard')
        }else{
            setError('Invalid credentials')
        }

    }
  return (
    <div>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' value={name} placeholder='Enter name' onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form>
        {error &&<p>{error}</p>}
    </div>
  )
}

export default Login