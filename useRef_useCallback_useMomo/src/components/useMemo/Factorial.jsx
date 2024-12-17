import React, { useMemo, useState } from 'react'

const Factorial = () => {
    const[count,setCount]=useState(0)

    const factorial=useMemo(()=>{
        console.log('Factoial of a number')
        let result=1;
        for(let i=1;i<=count;i++){
            result=result*i
        }
        return result
    },[count])
  return (
    <div>
        <h3>Example of useMemo hook with factorial of number</h3>
        <button onClick={()=>setCount(count+1)}>Incr</button>
        <p>Counter:{count} and Factorial is:{factorial}</p>
    </div>
  )
}

export default Factorial