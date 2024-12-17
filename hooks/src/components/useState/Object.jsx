import React, { useState } from 'react'

const Object = () => {
    const[person,setPerson]=useState({name:'john',age:23,address:{city:'Hyd',country:'India'}})

    const handleClick=()=>{
        setPerson({...person},person.address.city="Blore")
    }
  return (
    <div>
        <h3>Objects</h3>
        <p>Name:{person.name}</p>
        <p>Age:{person.age}</p>
        <p>City:{person.address.city}</p>
        <button onClick={handleClick}>Update City</button>
    </div>
  )
}

export default Object