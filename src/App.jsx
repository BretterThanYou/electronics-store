// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import './styles/App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList category="computers" />} />
          <Route path="/smartphones" element={<ProductList category="smartphones" />} /> {/* Updated Route */}
          <Route path="/accessories" element={<ProductList category="accessories" />} />
          <Route path="/cart" element={<Cart />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;