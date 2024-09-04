import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import ContactPage from "./components/ContactPage.jsx";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import PaymentPage from "./context/PaymentPage.jsx";
import About from "./components/About.jsx";

function App() {
  const { authUser } = useAuth(); // Destructure the value from useAuth
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          {/* <Navbar /> */}
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Login />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
