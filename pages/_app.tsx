import '../styles/globals.sass';
import type { AppProps } from 'next/app';
import Navbar from '../comp/Navbar';
import Right_Side from '../comp/Right_Side';

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
      <Navbar />
      <Component {...pageProps} />
      <Right_Side />
    </>
  ) 
}

export default MyApp
