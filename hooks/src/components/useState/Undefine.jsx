import React, {useState} from 'react'

const Undefine = () => {
    const[value,setValue]=useState(undefined)
    const handleChange=()=>{
        setValue("New Value")
    }
  return (
    <div>
        <h3>Value Change</h3>
        <p>{value===undefined?'Undefined Value':value}</p>
        <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default Undefine