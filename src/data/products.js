// src/data/products.js
import alienware from '../images/alienware.jpg'
const products = [
    {
      id: 1,
      title: 'Alienware Gaming Laptop',
      category: 'computers',
      image: alienware,
      description: 'High performance gaming laptop with RTX 3080.',
      price: 1499.99,
    },
    {
      id: 2,
      title: 'iPhone 16',
      category: 'smartphones',
      image: 'https://via.placeholder.com/300x200?text=Smartphone',
      description: 'Latest iPhone with stunning display and camera.',
      price: 799.99,
    },
    // Add at least 9 products per category
    // ...
    {
      id: 28,
      title: 'Gaming Headphones',
      category: 'accessories',
      image: 'https://via.placeholder.com/300x200?text=Bluetooth+Headphones',
      description: 'Noise-cancelling over-ear Bluetooth headphones.',
      price: 199.99,
    },
    {
      id: 4,
      title: 'Macbook Pro',
      category: 'computers',
      image: alienware,
      description: 'Powerful Mac Laptop with built in Apple Artificial Intelligence',
      price: 1499.99,
    },
    
  ];
  
  export default products;