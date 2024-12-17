import React from 'react'
import { useEffect } from 'react'

const ComponentMounting = () => {
    useEffect(()=>{
        console.log('Component Mounting...')
    },[])
  return (
    <div>
        <h3>Component Mounting</h3>
        <p>Example of component mounting with empty dependency array</p>
    </div>
  )
}

export default ComponentMounting