import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./WaitlistForm.css";
import mainLogo from "./assets/main-logo.jpg";

function WaitlistForm() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the backend API
      await axios.post(
        "https://harvest-direct-backend.vercel.app/api/waitlist",
        formData
      );

      // Show success toast
      toast.success("Thank you for joining the waitlist!", {
        position: "top-right",
        autoClose: 3000,
      });

      // Reset the form
      setFormData({ restaurantName: "", email: "", location: "" });
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast
      toast.error("There was an error submitting the form. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="container">
      {/* Toast Container for displaying toasts */}
      <ToastContainer />

      {/* Logo outside the form container */}
      <img src={mainLogo} alt="Main Logo" className="main-logo" />

      <div className="formBox">
        <h2 className="header">Farm-to-Fork Waitlist</h2>
        <p className="description">
          Join the waitlist to be among the first to access fresh farm-to-fork
          produce.
        </p>
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Restaurant Name:
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              required
              className="input"
            />
          </label>

          <label className="label">
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input"
            />
          </label>

          <label className="label">
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input"
            />
          </label>

          <button type="submit" className="button">
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}

export default WaitlistForm;
