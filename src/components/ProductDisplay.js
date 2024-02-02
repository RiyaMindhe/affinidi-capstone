import React from 'react';
import './ProductDisplay.css';

const ProductDisplay = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Hoodie', price: 10, imageUrl: 'hoodie.png' },
    { id: 2, name: 'T-Shirt', price: 15, imageUrl: 'tee.png' },
    { id: 3, name: 'SHIRT', price: 15, imageUrl: 'shirt.jpg' },
    { id: 4, name: 'JEANS', price: 20, imageUrl: 'jeans.jpg' },
    { id: 5, name: 'CAP', price: 5, imageUrl: 'cap.png' }
  ];

  return (
    <div className="ProductDisplay">
      {products.map((product) => (
        <div key={product.id} className="ProductItem">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
      );
};

export default ProductDisplay;
