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
    <main className={styles.main}>
      {menuList.map((menuList) => (
        <Card key={menuList.id} {...menuList} />
      ))}
    </main>
  )
}

export default Home
