// Components
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import Manifesto from "../components/manifesto";
import NavBar from "../components/layout/navbar";
import SocialIconBtn from "../components/buttons/social-icon-btn";
import backgroundVideo from '../public/background-animation.mp4';

const Home = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-0DQTSRH3RD`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0DQTSRH3RD', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Head>
        <title>Bonanza Exorsa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="nft, opensea, nft meaning, nft art, nft crypto, non fungible token, opensea nft, nft token, nft crypto art, crypto nft, coinbase nft, nfts crypto, nft buy, nft for sale, buy nfts, nft opensea, crypto, cryptocurrency, ethereum, eth"
        />
      </Head>

      <div id="home-page">
        
        {/* Background Video */}
        <video autoPlay muted loop id="bgVideo">
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <NavBar />

        <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden animate-fade-in">
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

          {/* Bonanza logo */}
          <div>
            <Image
              src="/logos/bonanza-long.png"
              alt="Bonanza"
              height="80px"
              width="350px"
            />
          </div>

          <div className="my-5">
            <Manifesto />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
