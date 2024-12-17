import React, { useState } from 'react'

const ArrayItems = () => {
    const[items,setItems]=useState([])
    const[newItem,setNewItem]=useState('')
    const handleClick=()=>{
        setItems([...items,newItem])
        setNewItem('')
    }
  return (
    <div>
        <h3>Array Items</h3>
        <input type='text' value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
        <button onClick={handleClick}>Add items</button>
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ArrayItems