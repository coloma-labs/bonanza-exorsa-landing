import Image from "next/image";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import SocialIconBtn from "../buttons/social-icon-btn";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 z-[10]">
      <footer className="footer"></footer>

      <div className="footer">
        <div className="content">
          <div className="md:flex md:px-20">
            <div className="w-full md:w-1/3">
              <div className="flex items-center">
                <a className="w-12 md:w-20" href="/" >
                    <Image
                      src="/logos/bonanza-long.png"
                      alt="Bonanza"
                      height="80px"
                      width="350px"
                    />
                </a>
                <span className="content-title">THE GARDEN</span>
              </div>
              <div className="mt-8 md:mt-12 text-2xs md:text-sm">Connect with us</div>
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
            <div className="md:w-2/3">
              <div className="mt-8 text-sm md:flex md:mt-0">
                <div className="flex-1">
                  <div><a href="/gallery">Gallery</a></div>
                  <div className="footer-menu"><a href="/for-sharing">For Sharing</a></div>
                  <div className="footer-menu"><a href="/for-supporter">For Supporters</a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-copyright">© 2022 Coloma Labs</div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
