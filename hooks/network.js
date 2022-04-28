import { useEffect, useState } from "react";
import { ethers } from "ethers";

const useNetwork = () => {
  const [correctNetwork, setCorrectNetwork] = useState(false);

  // Checks if wallet is connected to the correct network
  const checkCorrectNetwork = async () => {
    const { ethereum } = window;
    let chainId = await ethereum.request({ method: "eth_chainId" });
    console.log("Connected to chain:" + chainId);
    const devChainId = 31337; // This is the chainId for Hardhat. Make sure your MetaMask's Localhost 8545 reflect this. (Defaults to 1337)
    const localhostChainId = `0x${Number(devChainId).toString(16)}`;
    if (chainId !== localhostChainId) {
      setCorrectNetwork(false);
    } else {
      setCorrectNetwork(true);
    }
  };

  return {
    correctNetwork,
    checkCorrectNetwork,
  };
};

export default useNetwork;
