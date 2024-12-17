import React, { useContext } from 'react'
import InputContext from './inputContext'

const InputComponent = () => {
    const{text,setText}=useContext(InputContext)
  return (
    <div>
        <h3>Reversing a String</h3>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)} />
        <p>{text.split('').reverse().join('')}</p>
    </div>
  )
}

export default InputComponent