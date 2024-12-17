import React from 'react'

const withMyComponent = (WrappedComponent) => {
    const EnhanceComponent=(props)=>{
        const fancyText={color:'red',fontWeight:'bold',fontStyle:'italic'}
    
  return (
    <div style={fancyText}>
        <WrappedComponent {...props} />
    </div>
  )
}
return EnhanceComponent
}

export default withMyComponent