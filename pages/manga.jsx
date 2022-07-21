// Components
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

const Manga = () => {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTimer(true), 3500);

    return () => clearTimeout(timer);
  }, []);

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
        <title>Bonanza Exorsa - Manga</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="nft, opensea, nft meaning, nft art, nft crypto, non fungible token, opensea nft, nft token, nft crypto art, crypto nft, coinbase nft, nfts crypto, nft buy, nft for sale, buy nfts, nft opensea, crypto, cryptocurrency, ethereum, eth"
        />
      </Head>

      <Layout>
        <div className="flex flex-col justify-center items-center">
          <div className="section-title text-[#5c5f82]">
            <h1>Manga</h1>
          </div>
          <div className="max-w-[800px] min-h-screen">
            {!timer ? (
              <h3 className="text-[#5c5f82] mt-20 text-3xl animate-fade-out-slow">
                Preparing Bonan's Journey
              </h3>
            ) : (
              <div className="animate-fade-in shadow-2xl">
                <img src="/manga.svg" alt="Bonanza Manga" />
              </div>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Manga;
