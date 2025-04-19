import React, { useState } from "react";
import EmailForm from "./components/EmailForm";
import OTPVerification from "./components/OTPVerification";
import PatientRecords from "./components/PatientRecords";
import HospitalDashboard from "./components/HospitalDashboard";

function App() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [isHospital, setIsHospital] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsHospital(!isHospital)}>
        Switch to {isHospital ? "Patient" : "Hospital"} Mode
      </button>

      {isHospital ? (
        <HospitalDashboard />
      ) : !otpSent ? (
        <EmailForm setEmail={setEmail} setOtpSent={setOtpSent} />
      ) : !verified ? (
        <OTPVerification email={email} onVerified={() => setVerified(true)} />
      ) : (
        <PatientRecords email={email} />
      )}
    </div>
  );
}

export default App;
