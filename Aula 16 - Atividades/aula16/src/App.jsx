import './App.css'
import List from './pages/List'
import Personagem from './pages/Personagem'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List></List>}></Route>
        <Route path='/personagem' element={<Personagem></Personagem>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
