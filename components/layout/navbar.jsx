import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useWindowSize } from "../../hooks/window";
import NavBtn from "../buttons/nav-btn";
import SocialIconBtn from "../buttons/social-icon-btn";

export default function Navbar() {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-transparent">
      <div className="max-w-7xl mx-auto pl-4 pr-5">
        <div className="flex justify-between items-center py-6 justify-start space-x-10">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            <Link href="/">
              <div className="cursor-pointer">
                {width > 800 ? (
                  <Image
                    src="/logos/bonanza-long.png"
                    alt="Bonanza"
                    height="40px"
                    width="175px"
                  />
                ) : (
                  <Image
                    src="/logos/mobile.png"
                    alt="Bonanza"
                    height="40px"
                    width="35px"
                  />
                )}
              </div>
            </Link>
            {width > 800 && (
              <div className="flex gap-4 ml-5">
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
            )}
          </div>

          {width < 800 && (
            <div className="flex gap-4 ml-5">
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
          )}

          <div className="flex items-center justify-end lg:w-0">
            {width > 800 ? (
              <div className="flex gap-5">
                <NavBtn text="Home" link="/" />
                <NavBtn text="Gallery" disabled />
                <NavBtn text="Store" disabled />
                <NavBtn text="About" link="/about" />
                <NavBtn text="Journey" disabled />
              </div>
            ) : (
              <div onBlur={() => setIsOpen(false)}>
                <button
                  className="relative group"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div
                    className={`relative flex items-center justify-center w-[36px] h-[36px] transform transition-all bg-themeDarkOrange ring-0 ring-gray-300 hover:ring-8 ${
                      isOpen && "group-focus:ring-4"
                    } ring-opacity-30 duration-200 shadow-md`}
                  >
                    <div
                      className={`flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 ${
                        isOpen && "group-focus:-rotate-[45deg]"
                      } origin-center`}
                    >
                      <div
                        className={`bg-themeLightOrange h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                          isOpen &&
                          "group-focus:-rotate-90 group-focus:-translate-y-[1px]"
                        } origin-right delay-75`}
                      ></div>
                      <div className="bg-themeLightOrange h-[2px] rounded"></div>
                      <div
                        className={`bg-themeLightOrange h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                          isOpen &&
                          "group-focus:-rotate-90 group-focus:translate-y-[1px]"
                        } origin-left delay-75`}
                      ></div>
                    </div>
                  </div>
                </button>
                {isOpen && (
                  <div className="animate-fade-in-fast absolute right-[20px] z-100">
                    <div className="mt-3 bg-themeDarkOrange text-white min-w-[100px] text-right py-3 px-5">
                      <ul className="text-xl cursor-pointer">
                        <Link href="/">
                          <li className="py-1 transition duration-200 hover:text-themeLightOrange">
                            Home
                          </li>
                        </Link>
                        <li className="py-1 opacity-[0.6]">Gallery</li>
                        <li className="py-1 opacity-[0.6]">Store</li>
                        <Link href="/about">
                          <li className="py-1 transition duration-200 hover:text-themeLightOrange">
                            About
                          </li>
                        </Link>
                        <li className="py-1 opacity-[0.6]">Journey</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
