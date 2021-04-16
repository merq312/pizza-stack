import Head from 'next/head'
import Card from '../components/card/card.component'
import styles from '../styles/Home.module.scss'

import { menu } from '../data/data'

export const getStaticProps = async () => {
  return {
    props: {
      menuList: menu,
    },
  }
}

const Home = ({ menuList }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Stack</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        {menuList.map((menuList) => (
          <Card key={menuList.id} {...menuList} />
        ))}
      </main>
    </div>
  )
}

export default Home

/*
TODO
---
+ Set up global grid css layout
+ Design pizza item card
+ Write json data for menu items
- Cart functionality
- SVG icons on header
- Order/checkout page
- Sign in/up functionality
- Redo card css
*/
