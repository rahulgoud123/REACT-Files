
import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const handleIncr=()=>{
        setCount(count+1)
    }
    const handleDecr=()=>{
        setCount(count-1)
    }
  return (
    <div>
        <h3>Counter Application</h3>
        <p>Count:{count}</p>
        <button onClick={handleIncr}>Increment</button>
        <button onClick={handleDecr}>Decrement</button>
    </div>
  )
}

export default Counter