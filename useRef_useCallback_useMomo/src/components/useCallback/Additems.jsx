import React, { useCallback, useState } from 'react'

const Additems = () => {
    const[items,setItems]=useState([])
    const[newItems,setNewItems]=useState('')
    const addItems=useCallback(()=>{
        setItems((items)=>[...items,newItems])
        setNewItems('')
    },[newItems])
  return (
    <div>
        <h3>Adding items with useCallback</h3>
        <input type='text' value={newItems} onChange={(e)=>setNewItems(e.target.value)} />
        <button onClick={addItems}>Add Items</button>
        {items.map(item=>(
            <div key={item}>{item}
            </div>
        ))}
    </div>
  )
}

export default Additems