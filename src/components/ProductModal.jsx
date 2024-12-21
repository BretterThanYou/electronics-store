// src/components/ProductModal.jsx
import React from 'react';
import Modal from 'react-modal';
import '../styles/ProductModal.css';

Modal.setAppElement('#root');

const ProductModal = ({ product, onClose }) => {
  return (
    <Modal
      isOpen={!!product}
      onRequestClose={onClose}
      contentLabel="Product Details"
      className="modal"
      overlayClassName="overlay"
    >
      <button onClick={onClose} className="close-button">
        &times;
      </button>
      <div className="modal-content">
        <img src={product.image} alt={product.title} className="modal-image" />
        <div className="modal-details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;