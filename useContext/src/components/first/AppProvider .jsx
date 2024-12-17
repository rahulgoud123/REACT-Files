import React from 'react'
import AppContext from './appcontext'
import MyComponent from './MyComponent'

const AppProvider  = () => {
    const info="Use Context is wrap inside provider"
  return (
    <div>
        <AppContext.Provider value={info}>
          <MyComponent />  
        </AppContext.Provider>
    </div>
  )
}

export default AppProvider