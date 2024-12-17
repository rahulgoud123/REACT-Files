import React, { useContext } from 'react'
import AppContext from './appcontext'

const MyComponent = () => {
    const test=useContext(AppContext)
  return (
    <div>
        <p>Example of useContext hook:{test}</p>
    </div>
  )
}

export default MyComponent