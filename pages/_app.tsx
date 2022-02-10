import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Navbar from '../comp/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
