import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const{name}=useParams()
  return (
    <div>
        <h2>About Us page</h2>
        <p>Welcome to About us page:{name}</p>
    </div>
  )
}

export default About