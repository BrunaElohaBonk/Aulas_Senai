import  { useSatate } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Square } from './components/Square'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './assets/pages/Home'
import { User } from './assets/pages/User'

const App = () => {
  return (
    <BrowserRouter>
    <nav>
      <Link to={'/'}>Home</Link>
      <br />
      <Link to={'/user'}>User</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App