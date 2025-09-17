import  { useSatate } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Square } from './components/Square'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './assets/pages/Home'
import { About } from './assets/pages/About'
import { Profile } from './assets/pages/Profile'

const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/about'}>About</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/:nome' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App