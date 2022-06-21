import Image from "next/image";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import SocialIconBtn from "../buttons/social-icon-btn";

function Footer() {
  return (
    <div className="w-full bg-slate-300 py-5 lg:py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 z-[10]">
        <div className="footer">
          <div className="content md:px-20">
            <div className="md:flex">
              <div className="w-full md:w-1/3">
                <div className="flex items-center">
                  <a href="/">
                    <Image
                      src="/logos/white/bonanza-1.png"
                      alt="Bonanza"
                      height="40px"
                      width="120px"
                    />
                  </a>
                </div>
                <div className="mb-2 text-md lg:text-lg">Connect with us</div>
                {/* Socials */}
                <div className="flex gap-7 mb-5">
                  <SocialIconBtn
                    icon={FaDiscord}
                    link="Https://discord.gg/UxAXgguYt9"
                  />
                  <SocialIconBtn
                    icon={FaTwitter}
                    link="https://twitter.com/bonanzaexorsa"
                  />
                  <SocialIconBtn
                    icon={RiInstagramFill}
                    link="https://www.instagram.com/bonanzaexorsa"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:flex md:justify-end">
                <div className="mt-8 text-lg md:flex md:mt-0">
                  <div className="flex-1">
                    <div className="footer-menu">
                      <a href="/">Home</a>
                    </div>
                    <div className="footer-menu">
                      <a href="/">Gallery</a>
                    </div>
                    <div className="footer-menu">
                      <a href="/">Store</a>
                    </div>
                    <div className="footer-menu">
                      <a href="/">About</a>
                    </div>
                    <div className="footer-menu">
                      <a href="/">Journey</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">© 2022 Coloma Labs</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
