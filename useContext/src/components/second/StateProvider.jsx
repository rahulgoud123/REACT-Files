import React, { useState } from 'react'
import StateContext from './stateContext'
import StateComponent from './StateComponent'

const StateProvider = () => {
    const[text,setText]=useState('')
    const[number,setNumber]=useState(0)
  return (
    <div>
        <StateContext.Provider value={{text,setText,number,setNumber}}>
            <StateComponent />
        </StateContext.Provider>
    </div>
  )
}

export default StateProvider