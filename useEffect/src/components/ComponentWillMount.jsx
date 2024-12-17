import React, { useEffect, useState } from 'react'

const ComponentWillMount = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        const timer=setInterval(()=>{
            setCount((prevCount)=>prevCount+1)
        },1000)
        console.log('Timer Started')
        return()=>{
            clearInterval(timer)
            console.log('Timer stopped')
        }
    },[])
  return (
    <div>
        <h3>Example of Component Unmount</h3>
        <p>Counter value:{count}</p>
    </div>
  )
}

export default ComponentWillMount