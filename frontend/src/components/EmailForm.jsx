import React, { useState } from "react";
import axios from "axios";

const EmailForm = ({ setEmail, setOtpSent }) => {
  const [emailInput, setEmailInput] = useState("");

  const sendOtp = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/otp/send`, {
        email: emailInput,
      });
      setEmail(emailInput);
      setOtpSent(true);
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  return (
    <div>
      <h2>Enter Email to Access Medical Record</h2>
      <input
        type="email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
        placeholder="Enter your email"
      />
      <button onClick={sendOtp}>Send OTP</button>
    </div>
  );
};

export default EmailForm;
