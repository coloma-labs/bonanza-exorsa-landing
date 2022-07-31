// Core
import Script from "next/script";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
// Components
import introVideo from "../public/widescreen-banner-intro.mp4";
import loopVideo from "../public/widescreen-banner-loop.mp4";
import Image from "next/image";
// Externals
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useWindowSize } from "../hooks/window";
import Layout from "../components/layout";
import SocialIconBtn from "../components/buttons/social-icon-btn";
import NavBtn from "../components/buttons/nav-btn";

const Home = () => {
  const [vidEnded, setVidEnded] = useState(false)
  const { width } = useWindowSize();
  const loopVidRef = useRef();
  
  // start loop video when intro video ends
  useEffect(() => {
    loopVidRef.current?.load();
  }, [vidEnded])

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
          {width > 900 ? (
            <>

            <video autoPlay muted id="introVideo"
              className={vidEnded ? '-z-10' : 'z-10'}
              onEnded={() => setVidEnded(true)}
              ref={loopVidRef}
            >
              <source src={introVideo} type="video/mp4" />
            </video>

            <video autoPlay loop muted id="loopVideo"
              className={vidEnded ? 'z-10' : '-z-10'}
            >
              <source src={loopVideo} type="video/mp4" />
            </video>

            </>
          ) : (
            <div>
              <Image
                src="/anime-city.gif"
                alt="cross the bridge"
                layout="fill"
                objectFit="cover"
                objectPosition="70%"
              />
            </div>
          )}

          <div className="absolute bottom-0 left-0 h-screen w-full flex flex-col justify-center items-center">
            {width < 900 ? (
              <Image
                src="/logos/bonanza-long-cropped.png"
                alt="Bonanza"
                height="57px"
                width="240px"
              />
            ):(
                null
            )}
            <div className="flex gap-5 lg:mr-10 mt-52 animate-fade-in animation-delay-1000">
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
