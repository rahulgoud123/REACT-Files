import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosApi = () => {
    const[data,setData]=useState([])
    const[isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        setIsLoading(true)
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp=>{
            setData(resp.data)
            setIsLoading(false)
        })
        .catch(err=>{
            console.log('errors',err)
            setIsLoading(false)
        })
    },[])
  return (
    <div>
        <h3>Fetching the api with axios</h3>
        {isLoading?(
          <p>Data is Loading...</p>
          
        ):(
         
          <ul>
          {data.map((item,index)=>(
              <li key={index.id}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
              </li>
          ))}
        </ul> 
        )}
    </div>
  )
}

export default AxiosApi