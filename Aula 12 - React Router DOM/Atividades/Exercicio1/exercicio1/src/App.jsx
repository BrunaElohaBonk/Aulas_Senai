import  { useSatate } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import { Square } from './components/Square'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { User } from './pages/User'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/user/:id' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App