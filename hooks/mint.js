import { useState } from "react";
import NFT from "../utils/EternalNFT.json";
import axios from "axios";
import { ethers } from "ethers";
import { nftContractAddress } from "../config";

const useMint = () => {
  const [mintedNFT, setMintedNFT] = useState(null);
  const [miningStatus, setMiningStatus] = useState(null);
  const [loadingState, setLoadingState] = useState(0);
  const [txError, setTxError] = useState(null);

  // Creates transaction to mint NFT on clicking Mint Character button
  const mintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(
          nftContractAddress,
          NFT.abi,
          signer
        );

        let nftTx = await nftContract.createEternalNFT();

        console.log("Mining....", nftTx.hash);
        setMiningStatus(0);

        let tx = await nftTx.wait();
        setLoadingState(1);
        console.log("Mined!", tx);
        let event = tx.events[0];
        let value = event.args[2];
        let tokenId = value.toNumber();

        console.log(
          `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTx.hash}`
        ); // TO-DO: change this to alchemy link

        getMintedNFT(tokenId);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log("Error minting character", error);
      setTxError(error.message);
    }
  };

  // Gets the minted NFT data
  const getMintedNFT = async (tokenId) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const nftContract = new ethers.Contract(
          nftContractAddress,
          NFT.abi,
          signer
        );

        let tokenUri = await nftContract.tokenURI(tokenId);
        let data = await axios.get(tokenUri);
        let meta = data.data;

        setMiningStatus(1);
        setMintedNFT(meta.image);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
      setTxError(error.message);
    }
  };

  return {
    mintNft,
    getMintedNFT,
    mintedNFT,
    setMintedNFT,
    loadingState,
    setLoadingState,
    miningStatus,
    setMiningStatus,
    txError,
    setTxError,
  };
};

export default useMint;
