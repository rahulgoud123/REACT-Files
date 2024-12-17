import React, { useEffect, useState } from 'react'

const Example1 = () => {
    const[number,setNumber]=useState(0)
    const[str,setStr]=useState('')
    const[msg,setMsg]=useState('')

    //component mount
    /*useEffect(()=>{
        setNumber(35)
        setStr('New Value Added')
    },[])*/

    //component update
    useEffect(()=>{
        setMsg(`Number is ${number} and String is ${str}`)
    },[number,str])
    const handleNum=()=>{
        setNumber(number+1)
    }
    const handleStr=()=>{
        setStr('Updated Value')
    }
  return (
    <div>
        <h3>Component mount and update</h3>
        <p>Number:{number}</p>
        <p>String:{str}</p>
        <button onClick={handleNum}>Click</button>
        <button onClick={handleStr}>Click</button>
    </div>
  )
}

export default Example1