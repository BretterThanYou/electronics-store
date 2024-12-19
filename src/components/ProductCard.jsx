// src/components/ProductCard.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ProductModal from './ProductModal';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onSelect }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding
  };

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
        onClick={onSelect}
        className="product-image"
      />
      <h3 onClick={onSelect} className="product-title">
        {product.title}
      </h3>
      <p className="product-description">{product.description}</p>
      <div className="product-actions">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;