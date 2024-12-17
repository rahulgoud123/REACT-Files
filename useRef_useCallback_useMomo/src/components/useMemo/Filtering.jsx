import React, { useMemo, useState } from 'react'

const Filtering = () => {
    const[items,setItems]=useState(['apple','banana','mango','orange','kiwi'])
    const[search,setSearch]=useState('')

    const filterItems=useMemo(()=>{
        return items.filter(item=>item.toLowerCase().includes(search.toLowerCase()))
    })
  return (
    <div>
        <h3>Searching an Items with useMemo hook</h3>
        <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} />
        {filterItems.map((item,index)=>(
            <div key={index}>{item}
            </div>
        ))}

    </div>
  )
}

export default Filtering