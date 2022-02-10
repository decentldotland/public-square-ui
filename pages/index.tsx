import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Navbar from '../comp/Navbar'
import { getFeed } from "public-square-api";

const Home: NextPage = () => {

  async function loadTribusFeed() {
    const feed = await getFeed();

    return console.log(feed);
    
}
  loadTribusFeed();

  return (
    <>
  
      <Navbar />


    </>


  )
}

export default Home
