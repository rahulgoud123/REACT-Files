import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

const SwitchComponent = () => {
    const[background,setBackground]=useState(true)

    const handleChange=()=>{
        setBackground(!background)
        document.body.style.backgroundColor=background?'cyan':'pink'
    }
  return (
    <div>
        <Typography variant='h4'>Example of Switch bar</Typography>
        <Switch
  checked={background}
  onChange={handleChange}
  inputProps={{ 'aria-label': 'controlled' }}
/>
    </div>
  )
}

export default SwitchComponent