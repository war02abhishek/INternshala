import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Redirect,
  Link,
} from "react-router-dom";
import AboutUs from './components/AboutUs';
import Admin from './components/Admin/Admin';
import NewProduct from './components/Admin/NewProduct';
import UpdateProduct from './components/Admin/UpdateProduct';
import Header from './components/Header/Navbar';
import ProductHome from './components/Products/ProductHome';


const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<ProductHome />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/product/:id" element={<UpdateProduct />} />
        <Route path="/admin/create" element={<NewProduct />} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>
    </Router>
  );
}

export default App