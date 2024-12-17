import React, { useRef } from 'react'

const TextArea = () => {
    const textRef=useRef(null)
    const handleClick=()=>{
        textRef.current.value='Add the text on button click'
        textRef.current.style.backgroundColor='yellow'
    }
  return (
    <div>
        <button onClick={handleClick}>Add Text</button>
        <input type='text' ref={textRef} />
    </div>
  )
}

export default TextArea