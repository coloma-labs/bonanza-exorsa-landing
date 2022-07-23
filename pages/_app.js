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
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default App;
