import React, { useState } from "react";
import axios from "axios";

const EmailForm = ({ setEmail, setOtpSent }) => {
  const [emailInput, setEmailInput] = useState("");

  const sendOtp = async () => {
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/api/otp/send`;
    console.log("VITE_BACKEND_URL:", import.meta.env.VITE_BACKEND_URL);
    console.log("Full API URL:", apiUrl);
    console.log("Email Input:", emailInput);

    try {
      const response = await axios.post(apiUrl, {
        email: emailInput,
      });
      console.log("OTP Sent Response:", response.data);
      setEmail(emailInput);
      setOtpSent(true);
    } catch (err) {
      console.error("Failed to send OTP. Error:", err);
      alert("Failed to send OTP");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f4faff",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "1.5rem",
          fontSize: "1.25rem",
          color: "#3A59D1",
          fontWeight: "600",
        }}
      >
        Enter Email to Access Medical Record
      </h2>

      <input
        type="email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        placeholder="Enter your email"
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />

      <button
        onClick={sendOtp}
        style={{
          backgroundColor: "#7AC6D2",
          color: "white",
          fontWeight: "600",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#B5FCCD")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#7AC6D2")}
      >
        Send OTP
      </button>
    </div>
  );
};

export default EmailForm;
