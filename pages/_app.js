import "../styles/globals.css";
import { AccountWrapper } from "../store/account";

function App({ Component, pageProps }) {
  return (
    <AccountWrapper>
      <Component {...pageProps} />
    </AccountWrapper>
  );
}

export default App;
