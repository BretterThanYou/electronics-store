// src/data/products.js
import alienware from '../images/alienware.jpg'
import airpods from '../images/airpods.jpg'
import lenovo from '../images/lenovothinkpad.jpg'
import galaxy from '../images/galaxys24.jpg'
import gamingheadphones from '../images/gamingheadphones.jpg'
import iphone from '../images/iphone16.jpg'
import mac from '../images/macbookpro.jpg'
import watch from '../images/applewatch.jpg'
import pixel from '../images/googlepixel.jpg'
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
      image: iphone,
      description: 'Latest iPhone with stunning display and camera.',
      price: 1199.99,
    },
    {
      id: 3,
      title: 'Gaming Headphones',
      category: 'accessories',
      image: gamingheadphones,
      description: 'Noise-cancelling over-ear Bluetooth headphones.',
      price: 199.99,
    },
    {
      id: 4,
      title: 'Macbook Pro',
      category: 'computers',
      image: mac,
      description: 'Powerful Mac Laptop with built in Apple Artificial Intelligence',
      price: 1499.99,
    },
    {
      id: 5,
      title: 'Samsung Galaxy S24',
      category: 'smartphones',
      image: galaxy,
      description: 'Cutting edge android phone with many customization options',
      price: 899.99,
    },
    {
      id: 6,
      title: 'Apple Smart Watch',
      category: 'accessories',
      image: watch,
      description: 'Sleek, smart, and fashionable, the apple smart watch has it all',
      price: 499.99,
    },
    {
      id: 7,
      title: 'Lenovo Thinkpad',
      category: 'computers',
      image: lenovo,
      description: 'Cheap but efficient, the lenovo thinkpad is made for people who love to be productive',
      price: 399.99,
    },
    {
      id: 8,
      title: 'Google Pixel',
      category: 'smartphones',
      image: pixel,
      description: 'Designed by google, this smartphone excels at taking high quality photographs',
      price: 799.99,
    },
    {
      id: 9,
      title: 'Apple Air Pods',
      category: 'accessories',
      image: airpods,
      description: 'Top of the line wireless earbuds designed by apple for apple',
      price: 199.99,
    },

    
  ];
  
  export default products;