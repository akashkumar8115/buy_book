import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for v6
import { useAuth } from "../context/AuthProvider";
import "../css/BookCard.css"; // Import your CSS

const BookCard = ({ book }) => {
  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const { authUser } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const handleBuyClick = () => {
    if (authUser) {
      alert("Confirm! Are you buy this book ?");
      setShowModal(true);
      navigate("/payment"); // Redirect to payment page
    } else {
      navigate("/signup"); // Redirect to login page if not authenticated
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmPurchase = () => {
    // Perform purchase action
    alert(`Purchasing ${book.title}`);
    setShowModal(false);
  };

  const downloadPDF = (e) => {
    e.preventDefault();
    const pdfUrl = book.url;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank"; // Open the PDF in a new tab
    link.download = "file.pdf"; // Set the default file name for download
    link.click();
  };

  
  return (
    <div className="book-card">
      <div className="book-card-inner">
        <div className="book-card-front">
          <img src={book.image} alt={book.title} className="book-cover" />
        </div>
        <div className="book-card-back">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-description">{book.description}</p>
          <p className="book-price">${book.price}</p>
          <div className="book-buttons">
            <button className="btn buy-btn" onClick={handleBuyClick}>
              Buy
            </button>
            <button className="btn download-btn" onClick={downloadPDF}>
              Download
            </button>
          </div>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Confirm Purchase</h2>
                <p>Are you sure you want to purchase "{book.title}"?</p>
                <button
                  className="btn confirm-btn"
                  onClick={handleConfirmPurchase}
                >
                  Yes
                </button>
                <button className="btn cancel-btn" onClick={handleCloseModal}>
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
