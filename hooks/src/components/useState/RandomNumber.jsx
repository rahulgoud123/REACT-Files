import React, { useState } from 'react'

const RandomNumber = () => {
    const[random,setRandom]=useState(0)
    const generateRandom=()=>{
        setRandom(Math.floor(Math.random()*100)+1)
    }
  return (
    <div>
        <h3>Random Number Generator</h3>
        <p>Random:{random}</p>
        <button onClick={generateRandom}>Generate</button>
    </div>
  )
}

export default RandomNumber