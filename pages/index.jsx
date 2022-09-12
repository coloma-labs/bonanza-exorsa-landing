// Core
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import { useWindowSize } from "../hooks/window";
// Components
import bgVideo from "../public/widescreen-banner-animation.mp4";
import mobileVideo from "../public/portrait-banner-animation.gif";
// Externals
import Layout from "../components/layout";
import SocialIconBtn from "../components/buttons/social-icon-btn";

const Home = () => {
  const width = useWindowSize().width;
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
          {width > 768 ? (
            <>
              <video autoPlay muted id="bgVideo">
                <source src={bgVideo} type="video/mp4" />
              </video>
            </>
          ) : (
            <Image
              src={mobileVideo}
              alt="cross the bridge"
              layout="fill"
              objectFit="cover"
            />
          )}

          <div className="absolute bottom-0 left-0 h-screen w-full flex flex-col justify-center items-center">
            <div className="flex gap-5 md:mr-14 mt-48 md:mt-52 animate-fade-in">
              <SocialIconBtn
                color="text-white"
                icon="discord"
                link="https://discord.gg/Wz4g2Wrmuh"
              />
              <SocialIconBtn
                color="text-white"
                icon="twitter"
                link="https://twitter.com/bonanzaexorsa"
              />
              <SocialIconBtn
                color="text-white"
                icon="instagram"
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
