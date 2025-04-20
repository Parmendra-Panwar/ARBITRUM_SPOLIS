import React, { useState } from "react";
import axios from "axios";

const OTPVerification = ({ email, onVerified }) => {
  const [otp, setOtp] = useState("");

  const verify = async () => {
    const apiUrl = `${import.meta.env.VITE_BACKEND_URL}/api/otp/verify`;
    console.log("Verifying OTP at:", apiUrl);
    console.log("Email:", email, "OTP:", otp);

    try {
      const res = await axios.post(apiUrl, {
        email,
        otp,
      });

      if (res.data.success) {
        onVerified();
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      alert("Verification failed");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f4faff",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "2rem auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "1.5rem",
          fontSize: "1.5rem",
          color: "#3A59D1",
          fontWeight: "600",
        }}
      >
        Enter OTP sent to <span style={{ color: "#7AC6D2" }}>{email}</span>
      </h2>

      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          marginBottom: "1.5rem",
          fontSize: "1rem",
        }}
      />

      <button
        onClick={verify}
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
        Verify
      </button>
    </div>
  );
};

export default OTPVerification;
