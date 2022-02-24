import "../styles/globals.sass";
import type { AppProps } from "next/app";

import Right_Side from "../comp/Right_side/Right_Side";
import Navbar from "../comp/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Right_Side />
    </>
  );
}

export default MyApp;
