
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ListProducts from './pages/ListProducts'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
 <>
    <BrowserRouter>
    <Navbar />    
    <Header /> 
    <Routes>
      <Route path='/' element={<ListProducts />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/favorites' element={<Favorites/>}/>   
    </Routes>   
    <Footer /> 
    </BrowserRouter>   
    </>
  )
}

export default App