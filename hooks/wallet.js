import { useState } from "react";

const localhostChainId = `0x${Number(1337).toString(16)}`;
const ethChainId = "0x1";

const useWallet = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      console.log("Found authorized Account: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No authorized account found");
    }
  };

  // TO-DO: fix this to connect to
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        alert(
          "MetaMask is not installed. Please consider installing it: https://metamask.io/download.html"
        );
        return;
      }

      const chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("Connected to chain:" + chainId);
      console.log("Connected to devchain:" + localhostChainId);
      if (chainId !== localhostChainId && chainId !== "0x7a69") {
        try {
          // check if the chain to connect to is installed
          await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: localhostChainId }], // chainId must be in hexadecimal numbers.
          });
        } catch (error) {
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: localhostChainId,
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
        }
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Found account", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  return {
    checkIfWalletIsConnected,
    currentAccount,
    setCurrentAccount,
    connectWallet,
  };
};

export default useWallet;
