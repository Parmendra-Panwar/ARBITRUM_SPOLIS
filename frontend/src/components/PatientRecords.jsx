import React, { useState } from "react";
import { getContract } from "../utils/contract";

const PatientRecords = ({ email }) => {
  const [record, setRecord] = useState("");

  const fetchRecord = async () => {
    try {
      const contract = await getContract();
      const data = await contract.getRecords(email);
      console.log("Data :", data);
      setRecord(data);
    } catch (err) {
      console.log("Error fetching :", err);
    }
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
        Medical Records for <span style={{ color: "#7AC6D2" }}>{email}</span>
      </h2>

      <button
        onClick={fetchRecord}
        style={{
          backgroundColor: "#7AC6D2",
          color: "white",
          fontWeight: "600",
          padding: "0.75rem 1.5rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          marginBottom: "1.5rem",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#B5FCCD")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#7AC6D2")}
      >
        Get Records
      </button>

      <p
        style={{
          fontSize: "1rem",
          color: "#333",
          backgroundColor: "#e6f7ff",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
      >
        <b>Record:</b> {record || "No record found"}
      </p>
    </div>
  );
};

export default PatientRecords;
