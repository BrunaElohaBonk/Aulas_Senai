import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { UserList } from './pages/UserList'
import { UserPage } from './pages/UserPage'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'about'}>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile/:nome' element={<Profile />}></Route>
          <Route path='/userlist' element={<UserList />}></Route>
          <Route path='/userlist/:id' element={<UserPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
