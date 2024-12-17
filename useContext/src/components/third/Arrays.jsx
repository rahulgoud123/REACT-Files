import React, { useContext } from 'react'
import UseContext from './useContext'

const Arrays = () => {
    const{array}=useContext(UseContext)
  return (
    <div>
        <h3>Array List:</h3>
        {array.map((item,index)=>(
            <div key={index}>
                <p>{item}</p>
                </div>
        ))}
    </div>
  )
}

export default Arrays