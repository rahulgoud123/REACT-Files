import React, {useState} from 'react'

const LoginStatus = () => {
    const[isLogin,setIsLogin]=useState(true)

    const handleLogout=()=>{
        setIsLogin(true)
    }
    const handleLogin=()=>{
        setIsLogin(false)
    }
  return (
    <div>
        <h3>Login status</h3>

        {isLogin?(
            <div>
                <button onClick={handleLogin}>Login</button>
                <p>Welcome to Dashboard...</p>
                </div>
        ):(
            <div>
                <button onClick={handleLogout}>Logout</button>
                <p>Please login again</p>
                </div>
        )}
    </div>
  )
}

export default LoginStatus
