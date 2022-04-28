import { useEffect } from "react";

// Components
import Layout from "../components/layout";
import Loader from "react-loader-spinner";
import CtaButton from "../components/buttons/cta-btn";

// Hooks
import useMint from "../hooks/mint.js";
import useTesting from "../hooks/test";
import { useAccountContext } from "../store/account";
import WalletConnect from "../components/buttons/wallet-connect";

const Mint = () => {
  const { mintNft, mintedNFT, loadingState, miningStatus, txError } = useMint();
  const { getForknetEth } = useTesting();
  const { web3Provider } = useAccountContext();

  return (
    <Layout>
      <div className="flex h-64 flex-col align-center justify-center">
        <div className="text-center">
          {web3Provider ? (
            <>
              <CtaButton onClick={mintNft}>Click to Mint</CtaButton>

              <br />
              <br />

              <CtaButton secondary onClick={getForknetEth}>
                Get test ETH
              </CtaButton>
            </>
          ) : (
            <WalletConnect />
          )}

          {loadingState === 0 ? (
            miningStatus === 0 ? (
              txError === null ? (
                <div>
                  <div>Processing your transaction</div>
                  <Loader
                    type="TailSpin"
                    color="#d3d3d3"
                    height={40}
                    width={40}
                  />
                </div>
              ) : (
                <div>{txError}</div>
              )
            ) : (
              <div></div>
            )
          ) : (
            <div>
              <div>Your NFT</div>
              <img src={mintedNFT} alt="" />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Mint;
