import axios from 'axios'
import React, { useEffect, useState } from 'react'

const MiniProject = () => {
    const[products,setProducts]=useState([])
    const[fliterSearch,setFilterSearch]=useState([])
    const[search,setSearch]=useState('')
    useEffect(()=>{
        axios.get('https://dummyjson.com/products')
        .then(resp=>{
            setProducts(resp.data.products)
            setFilterSearch(resp.data.products)
        })
        .catch(err=>{console.log('Error in Fetching the data',err)})
    },[])

    const handleChange=(e)=>{
    const query=e.target.value.toLowerCase()
    setSearch(query)

    const result=products.filter(item=>item.title.toLowerCase().includes(query))
    setFilterSearch(result)
    }
  return (
    <div className='container'>
        <h1 className='product'>Product Details</h1>
        <div className='search-bar'>
            <input type='text' value={search} onChange={handleChange} className='search'/>
        </div>
        <div className='card-grid'>
            {fliterSearch.map((item,index)=>(
                <div key={index.id} className='card'>
                    <img src={item.thumbnail}  className='image'/>
                    <div className='info'>
                        <h3 className='title'>{item.title}</h3>
                        <p className='desc'>{item.description}</p>
                        <p className='price'>${item.price}</p>

                    </div>
                    </div>
            ))}
        </div>
    </div>
  )
}

export default MiniProject