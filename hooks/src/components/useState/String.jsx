import React, { useState } from 'react'

const String = () => {
    const[text,setText]=useState('Hi there')
    const handleText=()=>{
        setText('Good Morning')
    }
  return (
    <div>
        <p>Text:{text}</p>
        <button onClick={handleText}>Change</button>
    </div>
  )
}

export default String