import React, { useState } from "react";
import axios from "axios";

const OTPVerification = ({ email, onVerified }) => {
  const [otp, setOtp] = useState("");

  const verify = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/otp/verify`, {
        email,
        otp,
      });

      if (res.data.success) {
        onVerified();
      } else {
        alert("Invalid OTP");
      }
    } catch (err) {
      alert("Verification failed");
    }
  };

  return (
    <div>
      <h2>Enter OTP sent to {email}</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={verify}>Verify</button>
    </div>
  );
};

export default OTPVerification;
