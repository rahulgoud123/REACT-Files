import React, { useEffect } from 'react'

const useBackground = (color) => {
    useEffect(()=>{
        document.body.style.backgroundColor=color
    },[color])
  return (
    <div>
        
    </div>
  )
}

export default useBackground