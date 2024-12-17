
/*import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './components/basicApp/Contact'
import About from './components/basicApp/About'
import Home from './components/basicApp/Home'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <nav className='nav-links'>
        <ul className='ul-links'>
          <li>
            <Link to='/' className='links'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='links'>About Us</Link>
          </li>
          <li>
            <Link to='/contact' className='links'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App*/

//With useParams hook
/*import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/useParams/Home'
import About from './components/useParams/About'
import NotFound from './components/useParams/NotFound'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about/john'>John</Link>
          </li>
          <li>
            <Link to='/about/harry'>Harry</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:name' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App*/

//With Nested Routings
/*import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/nestedRoutes/Home'
import About from './components/nestedRoutes/About'
import Dashboard from './components/nestedRoutes/dashboard/Dashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App*/

//With useLocation Hook
/*import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import About from './components/useLocationHook/About'
import Home from './components/useLocationHook/Home'
import Location from './components/useLocationHook/Location'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/location-info?
            searchParam=value#hashValue'>Location Info</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/location-info/*' element={<Location />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App*/

//With useNavigate Hook
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/useNavigate/Home'
import About from './components/useNavigate/About'
import Login from './components/useNavigate/Login'
import Dashboard from './components/useNavigate/Dashboard'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App