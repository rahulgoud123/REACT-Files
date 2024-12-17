import { Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const ButtonComponent = () => {
    const[btn,setBtn]=useState('initial text')
    const handleClick=()=>{
        setBtn('New Text is Added')
    }
  return (
    <div>
        <Typography variant='h3'>Button Example</Typography>
        <Button variant="contained" onClick={handleClick}>Contained</Button>
        <Typography variant='p' style={{color:'red',fontSize:'20px'}}>{btn}</Typography>
    </div>
  )
}

export default ButtonComponent