import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Array from './components/useState/Array'
import Object from './components/useState/Object'
import Counter from './components/useState/Counter'
import RandomNumber from './components/useState/RandomNumber'
import Undefine from './components/useState/Undefine'
import String from './components/useState/String'
import ReverseNumber from './components/useState/ReverseNumber'
import Boolean from './components/useState/Boolean'
import LoginStatus from './components/useState/LoginStatus'
import ArrayItems from './components/useState/ArrayItems'

function App() {


  return (
    
      <div>
        <Array />
        <Object />
        <Counter />
        <RandomNumber />
        <Undefine />
        <String />
        <ReverseNumber />
        <Boolean />
        <LoginStatus />
        <ArrayItems />
      </div>
     
 
  )
}

export default App
