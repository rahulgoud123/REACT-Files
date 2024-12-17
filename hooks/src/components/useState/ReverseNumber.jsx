import React, { useState } from 'react'

const ReverseNumber = () => {
    const[text,setText]=useState('')
    const handleClick=()=>{
        setText(text.split('').reverse().join(''))
    }
  return (
    <div>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
        <p>Enter text:{text}</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default ReverseNumber