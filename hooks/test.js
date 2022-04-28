import { JsonRpcProvider } from "@ethersproject/providers";
import { formatEther, parseEther } from "ethers/lib/utils";
import { ethers } from "ethers";

const localProvider = new JsonRpcProvider(
  process.env.NEXT_PUBLIC_LOCALHOST_URL
);

const useTesting = () => {
  const getForknetEth = async () => {
    const [walletAddress] = await window.ethereum.request({
      method: "eth_accounts",
    });

    try {
      const accountToImpersonate = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // Change this address to one with an existing ETH balance
      await localProvider.send("hardhat_impersonateAccount", [
        accountToImpersonate,
      ]);
      const signer = localProvider.getSigner(accountToImpersonate);

      const signerbal = await signer.getBalance();

      const transferbal = parseFloat(formatEther(signerbal)) - 0.01;

      signer.sendTransaction({
        to: walletAddress || ethers.constants.AddressZero,
        value: parseEther(transferbal.toString()),
      });
    } catch (e) {
      console.log("Couldnt get eth:", e);
    }
  };

  return {
    getForknetEth,
  };
};

export default useTesting;
