import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate=useNavigate()

    const handleLogout=()=>{
        localStorage.removeItem('isLogin')
        navigate('/login')
    }
  return (
    <div>
        <h3>Welcome User</h3>
        <p>You have successfully login to dashboard</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard