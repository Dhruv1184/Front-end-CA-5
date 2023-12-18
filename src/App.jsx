import Home from './components/Home'
import './App.css'
import Register from './components/Register'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
      
    </>
  )
}

export default App
