import { ethers } from "ethers";
import ABI from "./abi.json";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
//this is for get contract  
export const getContract = async () => {
  if (window.ethereum && CONTRACT_ADDRESS) {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  } else {
    alert("Please install MetaMask or check contract address");
    return null;
  }
};
// write for add contract 