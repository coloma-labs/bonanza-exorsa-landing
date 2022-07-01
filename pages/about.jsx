// Components
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import { TextLoop } from "react-text-loop-next";

const About = () => {
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
        <title>Bonanza Exorsa - About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="nft, opensea, nft meaning, nft art, nft crypto, non fungible token, opensea nft, nft token, nft crypto art, crypto nft, coinbase nft, nfts crypto, nft buy, nft for sale, buy nfts, nft opensea, crypto, cryptocurrency, ethereum, eth"
        />
      </Head>

      <Layout>
        <div
          id="about-banner"
          className="min-h-[120px] md:min-h-[150px] lg:min-h-[180px] animate-banner-load px-5 flex items-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white animate-fade-in">
            About
          </h1>
        </div>

        <section className="bg-black py-20 lg:py-50 2xl:py-[10rem] px-5">
          <div className="max-w-[600px]">
            <div className="section-title">a metaphysical brand.</div>
            <div className="section-content">
              Bonanza is the world’s first ever Metaphysical Brand. Our
              team aims to garner a community of young entrepreneurs,
              creators, and artists that can utilize our digital and physical
              asset offerings to express themselves.
            </div>
          </div>

          <div className="flex justify-start lg:justify-end">
            <div className="max-w-[600px]">
              <div className="section-title text-left lg:text-right mt-10">
                our value proposition.
              </div>
              <div className="section-content text-left lg:text-right">
                A Bonanza NFT demonstrates your individual creativity, and
                individuality. Additionally, Bonanza NFTs serve as lifelong
                assets that provide IRL utility. Allowing holders to meet one
                another at our global events. 
                <br />
                <br />
                We believe that by educating our community on the value of
                our NFT propositions, we can build an agile ecosystem with
                unlimited possibilities for future collections.
              </div>
            </div>
          </div>

          <div className="max-w-[600px]">
            <div className="section-title mt-10">the bonan collection.</div>
            <div className="section-content">
              The Bonan Collection contains 4000 different variations of Bonan, 
              each which have their own unique personality and swagger.
              <br />
              <br />
              The story of Bonan was conceptualized and written by the 
              Founder of Bonanza, Johnathon Tesfaye, and is based on a story of his
              own life. Each variation of Bonan was then brought to life by the work
              of Ian Lawrence, the Creative Director of Bonanza.  
              <br />
              <br />
              Ian and Johnathon meticulously designed the characteristics of this
              collection to their exact specifications. Aggregating interests from
              traditional Japanese anime, to urban fashion and hip-hop culture into
              one overarching brand.
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
