import React, { useEffect, useState } from 'react'

const PromiseChaining = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resp=>resp.json())
        .then(result=>setData(result))
        .catch(err=>console.log('error',err))
    },[])
  return (
    <div>
        <h3>Example of api with promise chaining</h3>
        {data.map((item,index)=>(
            <div key={index.id}>
                <h2>{item.title}</h2>
                <p>{item.completed.toString()}</p>
            </div>    
        ))}
    </div>
  )
}

export default PromiseChaining