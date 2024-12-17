import React, { useContext } from 'react'
import UseContext from './useContext'

const String = () => {
    const{str,setStr}=useContext(UseContext)
  return (
    <div>
        <h3>Change String</h3>
        <p>New String:{str}</p>
        <button onClick={()=>setStr('New String Updated')}>Change Str</button>
    </div>
  )
}

export default String