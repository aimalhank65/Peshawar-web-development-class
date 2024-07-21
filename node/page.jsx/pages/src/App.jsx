
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Private from './pages/Private'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element = {<Home/>}></Route>
      <Route path='/private' element = {<Private/>}> </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App