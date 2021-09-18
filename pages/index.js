import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Halliburton Sperry Usefull Stuff</title>
        <meta name="description" content="Halliburton Sperry Usefull Stuff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome !
        </h1>
      </main>

      <footer className={styles.footer}>
        2021
      </footer>
    </div>
  )
}
