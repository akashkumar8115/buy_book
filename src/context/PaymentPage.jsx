import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for v6

import "../css/PaymentPage.css";
import jsPDF from "jspdf";
const PaymentPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
console.log(formData.cvv)
    if (formData.cvv.length > 1 &&formData.cardNumber.length > 1 ) {
      const a = document.getElementById("paynow");
      a.disabled = false;
      document.getElementById("paynow").style.opacity = "1";
      document.getElementById("paynow").style.cursor = "pointer";
    }
    else{
      const a = document.getElementById("paynow");
      a.disabled = true;
      document.getElementById("paynow").style.opacity = "0.7";
      document.getElementById("paynow").style.cursor = "not-allowed";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement payment submission logic here
    console.log("Payment data submitted", formData);
    handlePayment();
  };

  const handlePayment = () => {
    downloadSlip();
  };
  const downloadSlip = () => {
    if (formData) {
      const doc = new jsPDF();
      doc.text("Payment Slip", 20, 20);
      doc.text(`Couster Name: ${formData.cardHolder}`, 20, 30);
      doc.text(`Address: ${formData.cardNumber}`, 20, 40);
      doc.text("Thank you for your purchase!", 20, 50);
      doc.save("payment_slip.pdf");
    }
    if (formData.cvv.length > 1 &&formData.cardNumber.length > 1 ) {
      alert("Are you want go to Home page & also download Payment slip");
      navigate("/");
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cardHolder">Card Holder Name</label>
          <input
            type="text"
            name="cardHolder"
            id="cardHolder"
            value={formData.cardHolder}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              id="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          id="paynow"
          disabled
          className="payment-btn"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
