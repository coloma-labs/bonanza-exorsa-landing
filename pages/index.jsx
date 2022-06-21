// Components
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";

import { FaTwitter, FaDiscord } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import Manifesto from "../components/manifesto";
import NavBar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
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
        
        <NavBar />
        
        {/* Background Video */}
        <video className="w-full absolute -top-10 left-0 -z-10"
          autoPlay
          muted
          loop
          id="bgVideo"
          >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="h-screen" />


        {/* <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden animate-fade-in">

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
        </div> */}

        <Footer />

      </div>
    </>
  );
};

export default Home;
