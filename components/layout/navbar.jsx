import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useWindowSize } from "../../hooks/window";
import NavBtn from "../buttons/nav-btn";
import SocialIconBtn from "../buttons/social-icon-btn";
import { TextLoop } from "react-text-loop-next";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-transparent z-100">
      <div className="max-w-[1440px] mx-auto pl-4 pr-5">
        <div className="flex justify-between items-center py-6 justify-start">
          <div className="flex justify-start items-center lg:w-0 lg:flex-1">
            {router.pathname !== '/' ? (
              <Link href="/">
                <div className="cursor-pointer">
                  {width > 800 ? (
                    <Image
                      src="/logos/bonanza-long.png"
                      alt="Bonanza"
                      height="90px"
                      width="250px"
                    />
                  ) : (
                    <Image
                      src="/logos/mobile.png"
                      alt="Bonanza"
                      height="50px"
                      width="46px"
                    />
                  )}
                </div>
              </Link>
            ) : (null)}
          </div>

          <div className="flex items-center justify-end lg:w-0">
            {width > 800 ? (
              <div className="flex gap-5 xl:gap-8">
                <NavBtn text="About" link="/about" />
                <NavBtn text="Store" />
                <NavBtn text="Manga" />
                <NavBtn text="Plans" />
                <NavBtn text="Stories" />
                <NavBtn text="Docs" />
              </div>
            ) : (
              <div onBlur={() => setIsOpen(false)}>
                <button
                  className="relative group"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div
                    className={`relative flex items-center justify-center w-[36px] h-[36px] transform transition-all bg-[#f3f5f4] ring-0 ring-gray-300 hover:ring-8 ${
                      isOpen && "group-focus:ring-4"
                    } ring-opacity-30 duration-200 shadow-lg`}
                  >
                    <div
                      className={`flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 ${
                        isOpen && "group-focus:-rotate-[45deg]"
                      } origin-center`}
                    >
                      <div
                        className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                          isOpen &&
                          "group-focus:-rotate-90 group-focus:-translate-y-[1px]"
                        } origin-right delay-75`}
                      ></div>
                      <div className="bg-black h-[2px] rounded"></div>
                      <div
                        className={`bg-black h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                          isOpen &&
                          "group-focus:-rotate-90 group-focus:translate-y-[1px]"
                        } origin-left delay-75`}
                      ></div>
                    </div>
                  </div>
                </button>
                {isOpen && (
                  <div className="animate-fade-in-fast absolute right-[20px] z-100">
                    <div className="mt-3 bg-[#f3f5f4] text-black min-w-[100px] text-right py-3 px-5">
                      <ul className="text-xl cursor-pointer">
                        <Link href="/about">
                          <li className="py-1 transition duration-200 hover:text-themeLightOrange">
                            About
                          </li>
                        </Link>
                        <li className="py-1 opacity-[0.6]">Store</li>
                        <li className="py-1 opacity-[0.6]">Manga</li>
                        <li className="py-1 opacity-[0.6]">Plans</li>
                        <li className="py-1 opacity-[0.6]">Stories</li>
                        <li className="py-1 opacity-[0.6]">Docs</li>
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
