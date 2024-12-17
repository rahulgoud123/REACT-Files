import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Profile from './Profile'
import Settings from './Settings'

const Dashboard = () => {
  return (
    <div>
       
            <nav>
                <ul>
                    <li>
                        <Link to='/profile/123'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/setting'>Settings</Link>
                    </li>    
                </ul>
            </nav>
            <Routes>
                <Route path='/profile/:userId' element={<Profile />} />
                <Route path='/setting' element={<Settings />} />
            </Routes>
       
    </div>
  )
}

export default Dashboard