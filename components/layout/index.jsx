import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Bonanza</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/jpg"
          href="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        />
      </Head>

      <Navbar withAccount />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
