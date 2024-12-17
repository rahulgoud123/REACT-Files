import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RickMortyApi = () => {
    const[data,setData]=useState([])
    const[isLoading,setIsLoading]=useState([])
    useEffect(()=>{
        setIsLoading(true)
        axios.get('https://rickandmortyapi.com/api/character')
        .then((resp)=>{
            setData(resp.data.results)
            setIsLoading(false)
        })
        .catch((err)=>{
            console.log('Error is Fetching the data',err)
            setIsLoading(false)
        })
    },[])
  return (
    <div>
        <h3>RickMorty Api with axios</h3>
        {isLoading?(
            <p>Data is Loading....</p>
           
        ):(
            
            <div>
                {data.map((item,index)=>(
                    <div key={index.id}>
                        <h3>{item.name}</h3>
                        <p>{item.status}</p>
                        <img src={item.image} />
                    </div>    
                ))}
                </div>
            
        )}
    </div>
  )
}

export default RickMortyApi