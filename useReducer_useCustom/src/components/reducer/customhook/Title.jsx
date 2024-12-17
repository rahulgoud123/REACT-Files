import React, { useState } from 'react'
import useTitle from './useTitle'

const Title = () => {
    const[online,setOnline]=useState(true)
    useTitle(online)
  return (
    <div>
        <h3>User status with custom hook</h3>
        <p>Status:{online?'Online':'Offline'}</p>
        <button onClick={()=>setOnline(true)}>Online</button>
        <button onClick={()=>setOnline(false)}>Offline</button>
    </div>
  )
}

export default Title