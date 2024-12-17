import React, { useEffect } from 'react'

const useTitle = (online) => {
    useEffect(()=>{
        document.title=online?'You are online':'You are offline'
    },[online])
  return (
    <div>

    </div>
  )
}

export default useTitle