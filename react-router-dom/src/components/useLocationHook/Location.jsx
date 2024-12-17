import React from 'react'
import { useLocation } from 'react-router-dom'

const Location = () => {
    const location=useLocation()
  return (
    <div>
        <h2>Example of useLocation Hook which gives us url address</h2>
        <p>Current Path:{location.pathname}</p>
        <p>Search:{location.search}</p>
        <p>Hash:{location.hash}</p>
    </div>
  )
}

export default Location