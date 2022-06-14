// Components
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import { TextLoop } from "react-text-loop-next";

const Journey = () => {
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
        <title>Bonanza Exorsa - Journey</title>
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
            Journey
          </h1>
        </div>

        <div className="px-5 animate-[fade-in-slow_5s_ease]">
          
        </div>
      </Layout>
    </>
  );
};

export default Journey;
