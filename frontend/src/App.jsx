import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import EmailForm from "./components/EmailForm";
import OTPVerification from "./components/OTPVerification";
import PatientRecords from "./components/PatientRecords";
import HospitalDashboard from "./components/HospitalDashboard";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [isHospital, setIsHospital] = useState(false);

  return (
    <Router>
      {" "}
      {/* Wrap your entire app with Router */}
      <div className="App">
        <Navbar />
        <LandingPage />
        <center>
          <button
            id="form"
            onClick={() => setIsHospital(!isHospital)}
            style={{
              backgroundColor: "#7AC6D2",
              color: "white",
              fontWeight: "600",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              margin: "2rem auto",
              display: "block",
            }}
          >
            Switch to {isHospital ? "Patient" : "Hospital"} Mode
          </button>

          {isHospital ? (
            <HospitalDashboard />
          ) : !otpSent ? (
            <EmailForm setEmail={setEmail} setOtpSent={setOtpSent} />
          ) : !verified ? (
            <OTPVerification
              email={email}
              onVerified={() => setVerified(true)}
            />
          ) : (
            <PatientRecords email={email} />
          )}
        </center>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
