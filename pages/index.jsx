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
  var playerLoaded = false;
  
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

        {/* Soundcloud Player */}
        <div
          className='absolute bottom-0 right-0 overflow-hidden animate-fade-in animation-delay-1000 z-10'>
          <iframe
            width="100%" height="90"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1472715127&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&muted=1"
          >
          </iframe>
          {/* <div style={{fontSize: "10px", color: "#cccccc",lineBreak: "anywhere",wordBreak: "normal",overflow: "hidden",whiteSpace: "nowrap",textOverflow: "ellipsis",fontFamily: "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",fontWeight: "100"}}>
            <a href="https://soundcloud.com/bonanza-exorsa"
            title="Bonanza"
            target="_blank"
            style={{color: "#cccccc",textDecoration: "none"}}>
              Bonanza
            </a>
              · 
            <a href="https://soundcloud.com/bonanza-exorsa/sets/bonanza-vol-1"
            title="Bonanza Vol. 1"
            target="_blank"
            style={{color: "#cccccc",textDecoration: "none"}}>
              Bonanza Vol. 1
            </a>
          </div> */}
        </div>

        <div id="home-page">
          {width > 900 ? (
            <>

            <video autoPlay muted id="introVideo"
              className={vidEnded ? '-z-10' : '-z-[1]'}
              onEnded={() => setVidEnded(true)}
              ref={loopVidRef}
            >
              <source src={introVideo} type="video/mp4" />
            </video>

            <video autoPlay loop muted id="loopVideo"
              className={vidEnded ? '-z-[1]' : '-z-10'}
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
