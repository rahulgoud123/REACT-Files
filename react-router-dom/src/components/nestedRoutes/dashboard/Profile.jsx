import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const{userId}=useParams()
  return (
    <div>
        <h2>Profile page</h2>
        <p>This is the user with id:{userId}</p>
    </div>
  )
}

export default Profile