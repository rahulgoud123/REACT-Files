import { Typography } from '@mui/material'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioButton = () => {
    const[gender,setGender]=useState('female')

    const handleChange=(e)=>{
        setGender(e.target.value)
        console.log('Selected gender is:',e.target.value)
    }
  return (
    <div>
        <Typography variant='h4'>Example of Radio Buttons</Typography>
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    onChange={handleChange}
    value={gender}
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
    <Typography variant='p'>{`Selected Gender:${gender}`}</Typography>
  </RadioGroup>
</FormControl>

    </div>
  )
}

export default RadioButton