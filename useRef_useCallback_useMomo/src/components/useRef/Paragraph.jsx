import React, { useRef } from 'react'

const Paragraph = () => {
    const paraRef=useRef(null)
    const handleClick=()=>{
        paraRef.current.style.color='red'
        paraRef.current.style.fontSize='20px'
    }
  return (
    <div>
        <p ref={paraRef}>On clicking the button the paragraph color will change</p>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Paragraph