import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import axios from 'axios';

const CardComponent = () => {
    const[info,setInfo]=useState([])
    useEffect(()=>{
        axios.get('src/assets/data.json')
        .then(response=>{
            setInfo(response.data);
        })
        .catch((error)=>{
            console.log('Error in Fetching the data',error)
        });
        
    },[])
  return (
    <div>
        {info?.map(item=>(
            
         <Card sx={{ maxWidth: 345 }}>
            
              
            
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image={item.image_url}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    
        ))}
    </div>
  )
}

export default CardComponent