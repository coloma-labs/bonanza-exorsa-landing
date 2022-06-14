import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";
import { useCallback } from "react";
import Web3Modal from "web3modal";
import { ethers, providers } from "ethers";
import { useAccountContext } from "../store/account";

const INFURA_ID = "460f40a260564ac4a4f4b3fffb032dad";

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: INFURA_ID, // required
    },
  },
  "custom-walletlink": {
    display: {
      logo: "https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",
      name: "Coinbase",
      description: "Connect to Coinbase Wallet (not Coinbase App)",
    },
    options: {
      appName: "Coinbase", // Your app name
      networkUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
      chainId: 1,
    },
    package: WalletLink,
    connector: async (_, options) => {
      console.log(options);
      const { appName, networkUrl, chainId } = options;
      const walletLink = new WalletLink({
        appName,
      });
      const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
      await provider.enable();
      return provider;
    },
  },
};

function useConnection() {
  const { setAddress, setProvider, setChainId, setWeb3Provider, provider } =
    useAccountContext();

  let web3Modal;
  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: false,
      providerOptions, // required
    });
  }

  const connect = useCallback(async function () {
    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();

    if(network.chainId !== "31337"){ // change this chainId upon launch
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ethers.utils.hexlify(31337) }]
      })
    }

    setProvider(provider);
    setWeb3Provider(web3Provider);
    setAddress(address);
    setChainId(network.chainId);
  }, []);

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      // DO WE DELETE THIS CUZ THERE IS NO DISCONNECT????
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      setProvider(null);
      setWeb3Provider(null);
      setAddress(null);
      setChainId(null);
    },
    [provider]
  );

  return {
    connect,
    disconnect,
    web3Modal,
  };
}

export default useConnection;
