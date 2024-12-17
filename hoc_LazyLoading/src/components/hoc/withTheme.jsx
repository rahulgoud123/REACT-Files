import React, { useState } from 'react'

const withTheme = (WrappedComponent) => {
    const EnhanceTheme=(props)=>{
        const[isDark,setIsDark]=useState(false)

        const toggleTheme=()=>{
            setIsDark(!isDark)
        }

        const themeStyle={
            backgroundColor:isDark?'#333':'#999',
            color:isDark?'#666':'#fff',
            padding:'20px',
            textAlign:'center'
        }
    
  return (
    <div style={themeStyle}>
        <button onClick={toggleTheme}>Click</button>
        <WrappedComponent {...props} />
    </div>
  )
}
return EnhanceTheme
}

export default withTheme