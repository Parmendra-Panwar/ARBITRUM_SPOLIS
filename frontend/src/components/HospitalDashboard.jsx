import React, { useState } from "react";
import { getContract } from "../utils/contract";

const HospitalDashboard = () => {
  const [patientEmail, setPatientEmail] = useState("");
  const [record, setRecord] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadRecord = async () => {
    setLoading(true);
    try {
      const contract = await getContract();
      const tx = await contract.storePatientRecord(patientEmail, record);
      await tx.wait();
      alert("Medical record uploaded successfully to blockchain!");
    } catch (err) {
      console.error(err);
      alert("Error uploading data");
    }
    setLoading(false);
  };

  return (
    <div>
      <h2>🏥 Hospital Dashboard</h2>
      <input
        type="email"
        placeholder="Patient Email"
        value={patientEmail}
        onChange={(e) => setPatientEmail(e.target.value)}
      />
      <br />
      <textarea
        placeholder="Enter medical case history, treatment, and prescription"
        value={record}
        onChange={(e) => setRecord(e.target.value)}
        rows={6}
        cols={60}
      />
      <br />
      <button onClick={uploadRecord} disabled={loading}>
        {loading ? "Uploading..." : "Upload Record"}
      </button>
    </div>
  );
};

export default HospitalDashboard;
