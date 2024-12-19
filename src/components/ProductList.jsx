// src/components/ProductList.jsx
import React, { useState } from 'react';
import productsData from '../data/products';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

const ProductList = ({ category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = productsData.filter(
    (product) => product.category === category
  );

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={() => setSelectedProduct(product)}
        />
      ))}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;