import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
    const navigate=useNavigate()

    const goToHome=()=>{
        navigate(-1)
    }
  return (
    <div>
        <h3>About us page of useNavigate</h3>
        <Link to='/'>Home page</Link>
        <button onClick={goToHome}>Go to Home</button>
    </div>
  )
}

export default About