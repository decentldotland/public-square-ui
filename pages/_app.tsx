import "../styles/globals.sass";
import type { AppProps } from "next/app";

import Right_Side from "../comp/Right_side/Right_Side";
import Navbar from "../comp/Navbar/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Right_Side />
    </>
  );
}

export default MyApp;
