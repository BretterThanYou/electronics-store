// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ElectroStore</Link>
      </div>
      <nav>
        <Link to="/">Computers</Link>
```````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````+0.
`        <Link to="/smartphones">Smartphones</Link>
        <Link to="/accessories">Accessories</Link>
      </nav>
      <div className="cart-link">
        <Link to="/cart">Cart ({itemCount})</Link>
      </div>
    </header>
  );
};

export default Header;