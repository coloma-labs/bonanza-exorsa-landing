// Components
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

const Manga = () => {
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
          <div className="section-title text-themePurple">
            <h1>Manga</h1>
          </div>
          <div className="max-w-[800px] min-h-screen">
            <div className="animate-fade-in shadow-2xl">
              {["1", "2", "3", "5", "6", "7"].map((el) => (
                <Image
                  src={`/manga/BONAN_MANGA_0${el}.svg`}
                  alt={`Manga ${el}`}
                  width="2867"
                  height="4096"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Manga;
