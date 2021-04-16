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
- Order/checkout page
- SVG icons on header
- Sign in/up functionality
- Redo card css
*/
