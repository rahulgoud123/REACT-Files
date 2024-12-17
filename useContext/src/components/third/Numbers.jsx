import React, { useContext } from 'react'
import UseContext from './useContext'

const Numbers = () => {
    const{number,setNumber}=useContext(UseContext)
  return (
    <div>
        <h3>Counter Application</h3>
        <p>Number:{number}</p>
        <button onClick={()=>setNumber(number+1)}>Incr</button>
    </div>
  )
}

export default Numbers