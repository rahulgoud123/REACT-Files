import React, { useCallback, useState } from 'react'

const EvenOdd = () => {
    const[count,setCount]=useState(0)
    const checkNumber=useCallback(()=>{
        if(count%2==0){
            console.log('Number is Even')
        }else{
            console.log('Number is Odd')
        }
    })
  return (
    <div>
        <h3>Finding Even and Odd numbers</h3>
        <p>Counter:{count}</p>
        <button onClick={()=>setCount(count+1)}>Incr</button>
        <button onClick={checkNumber}>Check Number</button>
    </div>
  )
}

export default EvenOdd