// Modal.js
import React from "react";
import "../CSS/modal.css";
// import "./Modal.css"; // Ensure you have some basic styling for the modal

const Modal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onRequestClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onRequestClose} className="close-button">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
