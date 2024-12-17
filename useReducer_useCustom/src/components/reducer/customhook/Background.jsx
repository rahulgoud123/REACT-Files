import React, { useState } from 'react'
import useBackground from './useBackground'

const Background = () => {
    const[color,setColor]=useState('cyan')
    useBackground(color)
  return (
    <div>
        <h3>Example of Background with custom hook</h3>
        <input type='text' value={color} onChange={(e)=>setColor(e.target.value)} />
    </div>
  )
}

export default Background