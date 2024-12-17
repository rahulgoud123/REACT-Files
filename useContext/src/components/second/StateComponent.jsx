import React, { useContext } from 'react'
import StateContext from './stateContext'

const StateComponent = () => {
    const{text,setText,number,setNumber}=useContext(StateContext)
  return (
    <div>
        <h3>Context api with useState</h3>
        <p>Text:{text}</p>
        <button onClick={()=>setText('Updated Text')}>Change Text</button>
        <p>Number:{number}</p>
        <button onClick={()=>setNumber(number+1)}>Change Number</button>
    </div>
  )
}

export default StateComponent