import "../styles/globals.css";
import "aos/dist/aos.css";
import AOS from 'aos';
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default App;
