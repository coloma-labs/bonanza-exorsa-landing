// Core
import Script from "next/script";
import Head from "next/head";
import { useState } from "react";
// Components
import backgroundVideo from "../public/desktop-bg-min.mp4";
import Image from "next/image";
// Externals
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useWindowSize } from "../hooks/window";
import Layout from "../components/layout";
import SocialIconBtn from "../components/buttons/social-icon-btn";
import NavBtn from "../components/buttons/nav-btn";

const Home = () => {
  const { width } = useWindowSize();

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
        <title>Bonanza Exorsa - A Metaphysical Brand</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="nft, opensea, nft meaning, nft art, nft crypto, non fungible token, opensea nft, nft token, nft crypto art, crypto nft, coinbase nft, nfts crypto, nft buy, nft for sale, buy nfts, nft opensea, crypto, cryptocurrency, ethereum, eth"
        />
      </Head>

      <Layout>
        <div id="home-page">
          {/* {width > 900 ? (
            <video className="absolute -z-10" autoPlay muted loop id="bgVideo">
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          ) : ( */}
          <div>
            <Image
              src="/anime-city.gif"
              alt="cross the bridge"
              layout="fill"
              objectFit="cover"
              objectPosition="70%"
            />
          </div>
          {/* )} */}

          <div className="absolute bottom-0 left-0 h-screen w-full flex flex-col justify-center items-center">
            <Image
              src="/logos/bonanza-long-cropped.png"
              alt="Bonanza"
              height="57px"
              width="240px"
            />
            <div className="flex gap-5 mt-5">
              <SocialIconBtn
                icon={FaDiscord}
                link="https://discord.gg/Wz4g2Wrmuh"
              />
              <SocialIconBtn
                icon={FaTwitter}
                link="https://twitter.com/bonanzaexorsa"
              />
              <SocialIconBtn
                icon={FaInstagram}
                link="https://www.instagram.com/bonanzaexorsa/"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
