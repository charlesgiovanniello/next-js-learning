import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Paragraph2</p>
      <Link href="/ninjas"><a className={styles.btn}>See ninja listing</a></Link>
    </div>
    </>
  )
}
