import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState} from "react";

const Home: NextPage = () => {
    const [number, setNumber] = useState(false);

    const numberClick = () => {
        setNumber(!number);
        //Axios call
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend | Zenith</title>
        <meta name="description" content="This is the frontend for Zenith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Click on the button!
        </h1>
          <button onClick={numberClick} className={styles.button}>
              Number: {number ? 0 : 1}
          </button>
      </main>

    </div>
  )
}

export default Home
