
import { Routes, Route } from 'react-router'
import './App.css'
import MainPage from './Pages/MainPage'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App
