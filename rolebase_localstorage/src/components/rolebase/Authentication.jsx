import React from 'react'
import Admin from './Admin'
import About from './About'
import Unauthorize from './Unauthorize'
import User from './User'
import Home from './Home'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const CheckDetails=()=>{
    const userRole='admin'
    return userRole
}
const RoleBase = () => {
    const userDetails=CheckDetails()
  return (
    <div>
        <BrowserRouter>
        <Routes>
            {userDetails==='admin' &&(
                <>
                <Route path='/admin' element={<Admin />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/unauthorized' element={<Unauthorize />} />
                <Route path='/user' element={<User />} />
                <Route path='*' element={<Navigate to='/unauthorized'/>} />
                </>
            )}
            {userDetails==='user' &&(
                <>
                <Route path='/user' element={<User />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<Navigate to='/unauthorized'/>} />
                <Route path='*' element={<Navigate to= '/unauthorized'/>} />
                <Route path='/unauthorized' element={<Unauthorize />} />
                </>
            )}
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoleBase