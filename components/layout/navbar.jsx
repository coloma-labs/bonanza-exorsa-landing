import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useWindowSize } from "../../hooks/window";
import NavBtn from "../buttons/nav-btn";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-transparent z-100">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            {router.pathname !== "/" ? (
              <Link href="/">
                <div className="cursor-pointer flex items-center">
                  <Image
                    src="/logos/bonanza-long-cropped.png"
                    alt="Bonanza"
                    height="41px"
                    width="172px"
                  />
                </div>
              </Link>
            ) : null}
          </div>

          <div className={`flex items-center pb-2 md:pb-0`}>
            {width > 768 ? (
              <div className="flex gap-5 xl:gap-8">
                <NavBtn text="About" link="/about" />
                <NavBtn text="Store" />
                <NavBtn text="Manga" link="/manga" />
                <NavBtn text="Stories" />
                <NavBtn
                  text="Docs"
                  link="https://bonanzaexorsa.gitbook.io/bonanza-whitepaper/"
                  newTab
                />
              </div>
            ) : (
              <div onBlur={() => setIsOpen(false)}>
                <button
                  className="relative group"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div
                    className={`relative flex items-center justify-center w-[36px] h-[36px] transform transition-all bg-themePurple ring-0 ring-gray-300 hover:ring-8 ${
                      isOpen && "group-focus:ring-4"
                    } ring-opacity-30 duration-200 shadow-lg`}
                  >
                    <div
                      className={`flex flex-col justify-between w-[18px] h-[18px] transform transition-all duration-300 ${
                        isOpen && "group-focus:-rotate-[45deg]"
                      } origin-center`}
                    >
                      <div
                        className={`bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                          isOpen &&
                          "group-focus:-rotate-90 group-focus:-translate-y-[1px]"
                        } origin-right delay-75`}
                      ></div>
                      <div className={`bg-white h-[2px] rounded`} />
                      <div
                        className={`bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 ${
                          isOpen &&
                          "group-focus:-rotate-90 group-focus:translate-y-[1px]"
                        } origin-left delay-75`}
                      ></div>
                    </div>
                  </div>
                
                  {isOpen && (
                    <div className="animate-fade-in-fast absolute right-[20px] z-100">
                      <div className="mt-3 bg-themePurple text-white min-w-[100px] text-right py-3 px-5">
                        <ul className="text-xl cursor-pointer">
                          <Link href="/about">
                            <li className="py-1 transition duration-200 hover:text-themeLightOrange">
                              About
                            </li>
                          </Link>
                          <li className="py-1 opacity-[0.6]">Store</li>
                          <Link href="/manga">
                            <li className="py-1 transition duration-200 hover:text-themeLightOrange">
                              Manga
                            </li>
                          </Link>
                          <li className="py-1 opacity-[0.6]">Stories</li>
                          <a
                            href="https://bonanzaexorsa.gitbook.io/bonanza-whitepaper/"
                            target="_blank"
                          >
                            <li className="py-1 transition duration-200 hover:text-themeLightOrange">
                              Docs
                            </li>
                          </a>
                        </ul>
                      </div>
                    </div>
                  )}
                  
                </button>
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
