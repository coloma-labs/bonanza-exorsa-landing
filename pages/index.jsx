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

        <div className="h-screen mb-10" />

        <section>
          <div className="section-title">
            a metaphysical brand.
          </div>
          <div className="section-content">
            Bonanza, is the world’s first ever Metaphysical Brand. Our brand<br />symbolizes one’s journey towards the investigation of reality,
            self-worth,<br />identity, and possibility.
          </div>
        </section>

        <section>
          <div className="section-title text-right">
            the bonan collection.
          </div>
          <div className="section-content text-right">
            The Bonan Collection contains 4000 different variations of Bonan, each<br />which have its own unique personality and swagger.<br /><br />
            
            The story of Bonan was conceptualized and written by the Founder of,<br />Bonanza, Johnathon Tesfaye, and is based on real-life events derived<br />
            from his own life. Each variation of Bonan was brought to life by the<br />work of Ian Lawrence, the Creative Director of Bonanza.<br /><br />
            
            Ian and Johnathon meticulously designed characteristics of this<br />collection to their exact specifications. Aggregating interests from<br />
            traditional Japanese anime, to urban fashion and hip-hop culture into<br />one overarching brand.
          </div>
        </section>

        <section>
          <div className="section-title">
            synchronizing value.
          </div>
          <div className="section-content">
          The Bonanza team aims to garner a community of young entrepreneurs,<br />creators, and artists that can express themselves through our unique<br />brand.<br /><br /> 

          Bonanza NFTs demonstrate your individual creativity, adventure, and<br />individuality. Additionally, Bonanza NFTs plan to provide utility allowing<br />
          holders to gain exclusive access to IRL events, networks,<br />merchandising, and more.<br /><br />

          We believe that by educating our community on the value of our NFT<br />propositions, we can build an agile ecosystem moving forward with<br />unlimited
          possibilities.  
          </div>
        </section>
        
        <div className="mt-5 lg:mt-10">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
