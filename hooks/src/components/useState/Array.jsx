import React, { useState } from 'react'

const Array = () => {
    const[items,setItems]=useState(['item1','item2','item3'])
    const arrlen=items.length>0
  return (
    <div>
        <h3>Example of Array iteration</h3>
        {arrlen &&
        <ul>
            {items.map((item,index)=>(
                <li key={index}>{item}</li>
            ))}
                </ul>
}
{!arrlen &&<p>No items found</p>}

{/* {arrlen ?(
  <div>
<ul>
  {items.map((item,index)=>(
    <li key={index}>{item}</li>
  ))}
  </ul>
  </div>
  ):(
    <div>
    <p>No items Found</p>
    </div>
  ) */}
            
    </div>
  )
}

export default Array