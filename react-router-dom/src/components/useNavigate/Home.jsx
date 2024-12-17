import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate()

    const goToAbout=()=>{
        navigate('/about')
    }
    const goToLogin=()=>{
        navigate('/login')
    }
  return (
    <div>
        <h3>Welcome to Homepage with Navigate hook</h3>
        <button onClick={goToAbout}>Click</button>
        <button onClick={goToLogin}>Login</button>
    </div>
  )
}

export default Home