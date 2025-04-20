import React, { useState } from "react";
import { getContract } from "../utils/contract";

const HospitalDashboard = () => {
  const [patientEmail, setPatientEmail] = useState("");
  const [record, setRecord] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadRecord = async () => {
    setLoading(true);
    try {
      const contract = await getContract(); // get contract instance
      console.log("Contract instance:", contract);
      if (contract) {
        // Ensure you're passing 3 strings: email, case description, and medicines
        const tx = await contract.addRecord(patientEmail, record, "dolo650");
        await tx.wait(); // Wait for the transaction to be mined
        alert("Medical record uploaded successfully to blockchain!");
      } else {
        alert("Contract instance not found.");
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading data");
    }
    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f4faff",
        padding: "2rem",
        borderRadius: "1rem",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
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
        🏥 Hospital Dashboard
      </h2>

      <input
        type="email"
        placeholder="Patient Email"
        value={patientEmail}
        onChange={(e) => setPatientEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          marginBottom: "1rem",
          fontSize: "1rem",
        }}
      />

      <textarea
        placeholder="Enter medical case history, treatment, and prescription"
        value={record}
        onChange={(e) => setRecord(e.target.value)}
        rows={6}
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "0.5rem",
          border: "1px solid #ccc",
          marginBottom: "1.5rem",
          fontSize: "1rem",
          resize: "vertical",
        }}
      />

      <button
        onClick={uploadRecord}
        disabled={loading}
        style={{
          backgroundColor: loading ? "#ccc" : "#7AC6D2",
          color: "white",
          fontWeight: "600",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (!loading) e.target.style.backgroundColor = "#B5FCCD";
        }}
        onMouseLeave={(e) => {
          if (!loading) e.target.style.backgroundColor = "#7AC6D2";
        }}
      >
        {loading ? "Uploading..." : "Upload Record"}
      </button>
    </div>
  );
};

export default HospitalDashboard;
