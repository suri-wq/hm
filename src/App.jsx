
import { Routes, Route } from 'react-router'
import './App.css'
import MainPage from './pages/MainPage'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './route/PrivateRoute'
import { useEffect, useState } from 'react'

function App() {
  const [authenticate, setAuthenticate]=useState(false)
  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </>
  )
}

export default App
