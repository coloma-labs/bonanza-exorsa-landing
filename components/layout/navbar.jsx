import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { truncateBetween } from "../../utils/helpers";
// import useWallet from "../../hooks/wallet";
import { Popover } from "@headlessui/react";
import WalletConnect from "../buttons/wallet-connect";

export default function Navbar({ account }) {
  // const { connectWallet } = useWallet();

  return (
    <Popover className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 justify-start space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <h1>Bonanza</h1>
            </a>
          </div>

          <div className="flex items-center justify-end lg:w-0">
            <div className="hidden md:flex">
              <a href="#" className="mr-4 text-gray-500 hover:text-gray-900">
                <FaDiscord className="text-2xl" />
              </a>
              <a href="#" className="mr-4 text-gray-500 hover:text-gray-900">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="mr-4 text-gray-500 hover:text-gray-900">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
            {/* <button
              onClick={connectWallet}
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {account ? truncateBetween(account) : "Connect Wallet"}
            </button> */}
            <WalletConnect />
          </div>
        </div>
      </div>
    </Popover>
  );
}
