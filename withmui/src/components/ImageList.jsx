
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ImageList = () => {
    const[images,setImages]=useState([])
    useEffect(()=>{
        axios.get('data/data.json')
        .then(resp=>{
            setImages(resp.data)
        }).catch(err=>{
            console.log('Error',err)
        })
    },[])
  return (
    <div>
        <h3>Example os static images</h3>
        {images.map(image=>(
            <div key={image.id}>
                <p>{image.title}</p>
                <img src={image.url} alt={image.title} />
                </div>
        ))}
    </div>
  )
}

export default ImageList