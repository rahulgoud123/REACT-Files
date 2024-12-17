import { MenuItem, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DropDown = () => {
    const countries=[{id:101,name:'USA'},{id:102,name:'UK'},{id:103,name:'AUS'},{id:104,name:'IND'}]
    const[select,setSelect]=useState([])

    const handleChange=(e)=>{
        setSelect(e.target.value)
    }
  return (
    <div>
       <FormControl sx={{ m: 1, width: 300}}>
       <InputLabel id="demo-simple-select-label">Name</InputLabel>
        <Select
           
             labelId="demo-simple-select-label"
             id="demo-simple-select"
             value={select}
             
             onChange={handleChange}
             input={<OutlinedInput label="Name" />}
           >
             {countries.map((country)=>(
                <MenuItem
                key={country.id}
                value={country.name}

                >
                    {country.name}
                </MenuItem>
             ))}
           
        </Select>
      </FormControl>
      {select &&<p>{`Selected option is :${select}`}</p>}
    </div>
  )
}

export default DropDown