import React, { useMemo, useState } from 'react'

const Sorting = () => {
    const[list,setList]=useState([3,2,1])

    const sortedNumbers=useMemo(()=>{
        return([...list].sort((a,b)=>a-b))
    },[list])
  return (
    <div>
        <h3>Sorting Numbers in ascending order</h3>
        <p>Original Numbers:{list.join(',')}</p>
        <p>Sorting Numbers:{sortedNumbers.join(',')}</p>
    </div>
  )
}

export default Sorting