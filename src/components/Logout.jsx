

import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // To navigate after logout
// import "../css/Logout.css";
function Logout() {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate(); // To navigate to another route

  const handleLogout = () => {
    try {
      setAuthUser(null); // Clear user data
      localStorage.removeItem("Users"); // Remove user data from local storage
      toast.success("Logged out successfully");

      // Redirect to the login page after logout
      setTimeout(() => {
        navigate("/"); // Navigate to login page or any other route
      }, 1500);
    } catch (error) {
      toast.error(`Error: ${error.message || error}`);
    }
  };

  return (
    <div id="logout_div">
      <button id="authName" onClick={handleLogout} title="Log Out"
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      >
        {authUser.fullname ||"User"}
      </button>
        {/* <button id="logout" onClick={handleLogout}  className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer">
          logOut
        </button> */}
    </div>
  );
}

export default Logout;
