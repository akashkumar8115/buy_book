import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const [errors, setErrors] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newErrors = { ...errors };

    // Validate card number (15 digits)
    if (name === "cardNumber") {
      if (/^\d{0,16}$/.test(value)) {
        newErrors.cardNumber = "";
      } else {
        newErrors.cardNumber = "Card number must be 16 digits";
      }
    }

    // Validate card holder name (alphabets only)
    if (name === "cardHolder") {
      if (/^[a-zA-Z\s]*$/.test(value)) {
        newErrors.cardHolder = "";
      } else {
        newErrors.cardHolder = "Name must contain only letters";
      }
    }

    // Validate expiry date (MM/YY format)
    if (name === "expiryDate") {
      if (/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
        newErrors.expiryDate = "";
      } else {
        newErrors.expiryDate = "Invalid expiry date (MM/YY)";
      }
    }

    // Validate CVV (3 or 4 digits)
    if (name === "cvv") {
      if (/^\d{3,4}$/.test(value)) {
        newErrors.cvv = "";
      } else {
        newErrors.cvv = "CVV must be 3 or 4 digits";
      }
    }

    // Set the updated errors
    setErrors(newErrors);

    // Update form data if valid
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formData.cardNumber.length > 10 && newErrors.cvv == "") {
      const a = document.getElementById("paynow");
      a.disabled = false;
      document.getElementById("paynow").style.opacity = "1";
      document.getElementById("paynow").style.cursor = "pointer";
    } else {
      const a = document.getElementById("paynow");
      a.disabled = true;
      document.getElementById("paynow").style.opacity = "0.7";
      document.getElementById("paynow").style.cursor = "not-allowed";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      handlePayment();
    }
  };

  const handlePayment = () => {
    downloadSlip();
  };

  const downloadSlip = () => {
    const doc = new jsPDF();
    doc.text("Payment Slip", 20, 20);
    doc.text(`Customer Name: ${formData.cardHolder}`, 20, 30);
    doc.text(`Card Number: ${formData.cardNumber}`, 20, 40);
    doc.text("Thank you for your purchase!", 20, 50);
    doc.save("payment_slip.pdf");

    alert("Payment slip downloaded. Redirecting to homepage.");
    navigate("/");
  };

  const isFormValid = () => {
    return (
      formData.cardNumber.length === 15 &&
      formData.cardHolder &&
      formData.expiryDate &&
      formData.cvv.length >= 3 &&
      formData.cvv.length <= 4 &&
      !Object.values(errors).some((error) => error)
    );
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
          {errors.cardNumber && (
            <small className="error">{errors.cardNumber}</small>
          )}
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
          {errors.cardHolder && (
            <small className="error">{errors.cardHolder}</small>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
            <input
              type="text"
              name="expiryDate"
              id="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
            {errors.expiryDate && (
              <small className="error">{errors.expiryDate}</small>
            )}
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
            {errors.cvv && <small className="error">{errors.cvv}</small>}
          </div>
        </div>

        <button
          type="submit"
          id="paynow"
          disabled={!isFormValid()}
          className={`payment-btn ${isFormValid() ? "" : "disabled"}`}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
