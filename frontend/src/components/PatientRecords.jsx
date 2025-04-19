import React, { useState } from "react";
import { getContract } from "../utils/contract";

const PatientRecords = ({ email }) => {
  const [record, setRecord] = useState("");

  const fetchRecord = async () => {
    try {
      const contract = await getContract();
      const data = await contract.getPatientRecord(email);
      setRecord(data);
    } catch (err) {
      alert("Error fetching data");
    }
  };

  return (
    <div>
      <h2>Medical Records for {email}</h2>
      <button onClick={fetchRecord}>Get Records</button>
      <p><b>Record:</b> {record || "No record found"}</p>
    </div>
  );
};

export default PatientRecords;
