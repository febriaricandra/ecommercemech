import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import React from 'react';
import Product from './components/Product';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/products' element={<Products/>} />
          <Route exact path='/products/:id' element={<Product/>} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
