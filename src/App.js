import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/products" element={<ProductList/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
    {/* <Home /> */}
    </>
  )
}

export default App