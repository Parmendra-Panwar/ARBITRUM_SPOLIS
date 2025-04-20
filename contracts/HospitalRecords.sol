// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract HospitalRecords {
    struct Record {
        string patientEmail;
        string caseDescription;
        string issuedMedicines;
        address hospital;
    }

    mapping(string => Record[]) private records; // key: email

    event RecordAdded(string indexed patientEmail, address hospital);

    function addRecord(string memory _patientEmail, string memory _caseDesc, string memory _medicines) external {
        records[_patientEmail].push(Record({
            patientEmail: _patientEmail,
            caseDescription: _caseDesc,
            issuedMedicines: _medicines,
            hospital: msg.sender
        }));
        emit RecordAdded(_patientEmail, msg.sender);
    }

    function getRecords(string memory _patientEmail) external view returns (Record[] memory) {
        return records[_patientEmail];
    }
}
