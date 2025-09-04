import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'

function App() {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
