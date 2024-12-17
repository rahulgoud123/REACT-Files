import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const fetchUrl=async()=>{
    try{
        const resp=await fetch('https://jsonplaceholder.typicode.com/posts')
        const result=await resp.json()
        setData(result)
    }    
    catch(err){
      console.log('Error in fetching the data',err)
    }    
        }
        fetchUrl()
    },[])
  return (
    <div>
      <h3>Apifetching with fetch method</h3>
      <ul>
        {data.map((key,index)=>(
          <li key={index.id}>
            <h3>{key.title}</h3>
            <p>{key.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchApi