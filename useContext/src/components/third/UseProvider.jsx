import React, { useState } from 'react'
import UseContext from './useContext'
import Numbers from './Numbers'
import Arrays from './Arrays'
import String from './String'

const UseProvider = () => {
    const[number,setNumber]=useState(0)
    const[str,setStr]=useState('String value')
    const[array]=useState(['item1','item2','item3'])
  return (
    <div>
        <UseContext.Provider value={{number,str,array,setNumber,setStr}}>
            <Numbers />
            <String />
            <Arrays />
        </UseContext.Provider>
    </div>
  )
}

export default UseProvider