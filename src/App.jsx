
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import Shopcatagory from './Pages/Shopcatagory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import { Footer } from './Components/Footer/Footer'
// import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<Shopcatagory category="men" />} />
        <Route path='/womens' element={<Shopcatagory category="women" />} />
        <Route path='/kids' element={<Shopcatagory category="kid" />} />
        <Route path=':Product' element={<Product />}>
          <Route path=':ProductId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
