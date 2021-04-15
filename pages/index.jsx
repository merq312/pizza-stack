import Head from 'next/head'
import Card from '../components/card/card.component'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
    </div>
  )
}

export default Home

/*
TODO
---
- Set up global grid css layout
- Design pizza item card
- Write json data for menu items
- Cart functionality
- Order/checkout page
- Sign in/up functionality
*/
