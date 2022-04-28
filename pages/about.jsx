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
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white font-bold animate-fade-in">
            About
          </h1>
        </div>

        <div className="px-5 text-lg md:text-xl">
          <div className="text-center font-italic animate-[fade-in-slow_5s_ease]">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in text-center">
              Bonanza is{" "}
              <TextLoop delay={2000}>
                <span>a story</span>
                <span>a brand</span>
                <span>inspiration</span>
              </TextLoop>
              .
            </h1>
          </div>

          <div className="mt-20 animate-[fade-in-slow_7s_ease] text-center">
            <span>
              Symbolizing the bridge between both the physical and virtual
              worlds.
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
