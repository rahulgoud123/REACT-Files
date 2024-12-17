import React, { useEffect, useState } from 'react'

const ComponentUpdating = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log(`Count value ${count}`)
    },[count])
  return (
    <div>
        <h3>Example of Component Updating</h3>
        <p>Current Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Incrs</button>


    </div>
  )
}

export default ComponentUpdating