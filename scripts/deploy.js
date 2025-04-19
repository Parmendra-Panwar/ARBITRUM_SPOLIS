const hre = require("hardhat");

async function main() {
  const HospitalRecords = await hre.ethers.getContractFactory("HospitalRecords");
  const contract = await HospitalRecords.deploy();

  await contract.waitForDeployment();

  console.log("HospitalRecords deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
