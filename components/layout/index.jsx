import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children, style }) {
  return (
    <div className={style}>
      {/* <Navbar /> */}
      <div className="max-w-6xl mx-auto p-5 mb-10 lg:mb-20">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
