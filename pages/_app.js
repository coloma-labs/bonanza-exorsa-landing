import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
    <ParallaxProvider>
      
      <Component {...pageProps} />
    </ParallaxProvider>

    {/* Soundcloud Player */}
    <div
      className='fixed bottom-0 right-0 overflow-hidden animate-fade-in animation-delay-1000 z-10'>
      <iframe
        width="100%" height="90"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1472715127&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true&muted=1"
      >
      </iframe>
    </div>
    </>
  );
}

export default App;
