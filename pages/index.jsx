// Core
import Script from "next/script";
import Head from "next/head";
// Externals
import { FaTwitter, FaDiscord, FaInstagram } from "react-icons/fa";
import Layout from "../components/layout";
import SocialIconBtn from "../components/buttons/social-icon-btn";

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
        <title>Bonanza Exorsa - A Metaphysical Brand</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="nft, opensea, nft meaning, nft art, nft crypto, non fungible token, opensea nft, nft token, nft crypto art, crypto nft, coinbase nft, nfts crypto, nft buy, nft for sale, buy nfts, nft opensea, crypto, cryptocurrency, ethereum, eth"
        />
      </Head>

      <Layout>
        <div id="home-page">
          <div className="hidden md:block">
            <video className="absolute -z-10" autoPlay muted loop id="bgVideo">
              <source src={"/desktop-loop.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="md:hidden">
            <video className="absolute -z-10" autoPlay muted loop id="bgVideo">
              <source src={"/mobile-loop.mp4"} type="video/mp4" />
            </video>
          </div>

          <div className="absolute bottom-0 left-0 h-screen w-full flex flex-col justify-center items-center">
            <div className="flex gap-5 mt-36">
              <SocialIconBtn
                color="text-white"
                icon={FaDiscord}
                link="https://discord.gg/Wz4g2Wrmuh"
              />
              <SocialIconBtn
                color="text-white"
                icon={FaTwitter}
                link="https://twitter.com/bonanzaexorsa"
              />
              <SocialIconBtn
                color="text-white"
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
