import "../css/Cards.css";
import { useAuth } from "../context/AuthProvider";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Cards({ item }) {
  const { authUser } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const downloadPDF = (e) => {
    e.preventDefault();
    const pdfUrl = item.url;
    window.open(pdfUrl, "_blank");
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "file.pdf"; // Set the default file name for download
    link.click();
  };

  const handleBuyClick = () => {
    if (authUser) {
      alert("Confirm! Are you buy this book ?");
      setShowModal(true);
      navigate("/payment"); // Redirect to payment page
    } else {
      navigate("/signup"); // Redirect to login page if not authenticated
    }
  };

  return (
    <>
      <div className="book_card_div mt-4 my-3 p-3">
        <div className="book_card card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h4 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h4>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              {/* {({item.category != "free"})?:( <div className="badge badge-outline">${item.price}</div>)} */}
              {item.category !== "free" ? (
                <div className="badge badge-outline">${item.price}</div>
              ) : (
                <div>
                  <button className="badge badge-outline" onClick={downloadPDF}>
                    Download PDF
                  </button>
                </div>
              )}
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                <button onClick={handleBuyClick}> Buy Now</button>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
