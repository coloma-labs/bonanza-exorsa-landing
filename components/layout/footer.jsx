import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <footer className="footer flex justify-between md:text-center md:block">
        <span>Bonanza</span>
        <div className="flex md:hidden">
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
      </footer>
    </div>
  );
}

export default Footer;
