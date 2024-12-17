import React, { useRef } from 'react'

const InputFeild = () => {
    const inputRef=useRef(null)

    const changeRef=()=>{
        inputRef.current.style.backgroundColor='green'
        inputRef.current.focus()
    }
  return (
    <div>
        <h3>Example of UseRef hook</h3>
        <input type='text' ref={inputRef} onChange={changeRef}/>
    </div>
  )
}

export default InputFeild