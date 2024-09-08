import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // To navigate after logout

function Logout() {
  const { authUser, setAuthUser } = useAuth();
  const [profileName, setProfileName] = useState("User"); // Default name is 'User'
  const navigate = useNavigate(); // To navigate to another route

  // Handle logout functionality
  const handleLogout = () => {
    try {
      setAuthUser(null); // Clear user data
      localStorage.removeItem("Users"); // Remove user data from local storage
      toast.success("Logged out successfully");

      // Redirect to the login page after logout
      setTimeout(() => {
        navigate("/"); // Navigate to home or login page
      }, 1500);
    } catch (error) {
      toast.error(`Error: ${error.message || error}`);
    }
  };

  // Effect to handle setting the profile name
  useEffect(() => {
    if (authUser && authUser.fullname) {
      const fulluserName = authUser.fullname.trim();

      if (fulluserName) {
        const nameParts = fulluserName.split(" ").filter(Boolean); // Filter out empty strings
        const firstTwoWords = nameParts.slice(0, 2).join(" "); // Get the first two words

        // Set profile name to display
        setProfileName(firstTwoWords);
      }
    } else {
      console.log("Full name is empty or invalid");
    }
  }, [authUser]); // Only runs when authUser changes

  return (
    <div id="logout_div">
      <button
        id="authName"
        onClick={handleLogout}
        title="Log Out"
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      >
        {profileName || "User"}
      </button>
    </div>
  );
}

export default Logout;
