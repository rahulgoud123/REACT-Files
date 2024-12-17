import React, { useState } from 'react'
import InputContext from './inputContext'
import InputComponent from './InputComponent'

const InputProvider = () => {
    const[text,setText]=useState('')
  return (
    <div>
        <InputContext.Provider value={{text,setText}}>
        <InputComponent />
        </InputContext.Provider>
    </div>
  )
}

export default InputProvider