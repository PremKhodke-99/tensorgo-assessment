import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Plans from './pages/Plans'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/plan' element={<Plans />} />
      </Routes>
    </div>
  )
}

export default App