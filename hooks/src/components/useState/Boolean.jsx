import React, { useState } from 'react'

const Boolean = () => {
    const[isActive,setIsActive]=useState(true)
  return (
    <div>
        <h3>Boolean example</h3>
        {isActive &&<p>Welcome User,</p>}
        {!isActive &&<p>Please login again</p>}
    </div>
  )
}

export default Boolean