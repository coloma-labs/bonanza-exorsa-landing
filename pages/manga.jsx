// Components
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { useWindowSize } from "../hooks/window";

const Manga = () => {
  const mobile = useWindowSize().width < 768;
  return (
    <>
      <Head>
        <title>Bonanza Exorsa - Manga</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="nft, opensea, nft meaning, nft art, nft crypto, non fungible token, opensea nft, nft token, nft crypto art, crypto nft, coinbase nft, nfts crypto, nft buy, nft for sale, buy nfts, nft opensea, crypto, cryptocurrency, ethereum, eth"
        />
      </Head>

      <Layout>
        {mobile ? (
          <>
            <div className="flex flex-col justify-center items-center">
              <div className="section-title text-themePurple">
                <h1>Manga</h1>
              </div>
              <div className="max-w-[800px] min-h-screen">
                <div className="animate-fade-in shadow-2xl">
                  {["1", "2", "3", "4", "5", "6", "7"].map((el) => (
                    <Image
                      src={`/manga/BONAN_MANGA_0${el}.svg`}
                      alt={`Manga ${el}`}
                      width="2867"
                      height="4096"
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* CSS flipbook
              -inside cover pages at the front and back of book
              -divided into physical pages which have a front and back

              TODO: Front cover with logo and book opening animation on page load
              TODO: Book size responsiveness
              TODO: Change from page flip buttons to clicking anywhere on the
                    page will flip in that direction
             */}

            <div className="book">
              <input type="checkbox" id="c1"/>
              <input type="checkbox" id="c2"/>
              <input type="checkbox" id="c3"/>

              <div id="cover" />

              <div className="flip-book">

                {/* First physical page */}

                <div className="flip" id="p1">
                  <div className="front">
                    <Image
                      src={`/manga/BONAN_MANGA_01.svg`}
                      alt={`Manga 1`}
                      width="2867"
                      height="4096"
                    />
                    <label className="flip-btn" for="c1">Next</label>
                  </div>

                  <div className="back">
                    <Image
                      src={`/manga/BONAN_MANGA_02.svg`}
                      alt={`Manga 2`}
                      width="2867"
                      height="4096"
                    />
                    <label className="flip-btn" for="c1">Back</label>
                  </div>

                </div>

                {/* Second physical page */}

                <div className="flip" id="p2">
                  <div className="front">
                    <Image
                      src={`/manga/BONAN_MANGA_03.svg`}
                      alt={`Manga 3`}
                      width="2867"
                      height="4096"
                    />
                    <label className="flip-btn" for="c2">Next</label>
                  </div>
                  <div className="back">
                    <Image
                      src={`/manga/BONAN_MANGA_04.svg`}
                      alt={`Manga 4`}
                      width="2867"
                      height="4096"
                    />
                    <label className="flip-btn" for="c2">Back</label>
                  </div>
                </div>

                {/* Third physical page */}

                <div className="flip" id="p3">
                  <div className="front">
                    <Image
                      src={`/manga/BONAN_MANGA_05.svg`}
                      alt={`Manga 5`}
                      width="2867"
                      height="4096"
                    />
                    <label className="flip-btn" for="c3">Next</label>
                  </div>
                  <div className="back">
                    <Image
                      src={`/manga/BONAN_MANGA_06.svg`}
                      alt={`Manga 6`}
                      width="2867"
                      height="4096"
                    />
                    <label className="flip-btn" for="c3">Back</label>
                  </div>
                </div>

                {/* Fourth physical page */}

                <div className="flip" id="p4">
                  <div className="front">
                    <Image
                      src={`/manga/BONAN_MANGA_07.svg`}
                      alt={`Manga 7`}
                      width="2867"
                      height="4096"
                    />
                  </div>
                  <div className="back">
                    <Image
                      src={`/manga/BONAN_MANGA_07.svg`}
                      alt={`Manga 7`}
                      width="2867"
                      height="4096"
                    />
                    <label className="flip-btn" for="c4">Back</label>
                  </div>
                </div>

                <div id="cover" />

              </div>
            </div>
          </>
        )}
      </Layout>
    </>
  );
};

export default Manga;
