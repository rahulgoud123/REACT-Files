import React, { useCallback, useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
    const handleClick=useCallback(()=>{
        setCount(count+1)
    },[count])
  return (
    <div>
        <h3>Example of useCallback hook</h3>
        <p>Counter:{count}</p>
        <button onClick={handleClick}>Incr</button>
    </div>
  )
}

export default Counter