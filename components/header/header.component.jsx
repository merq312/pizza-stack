import styles from './header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>PizzaStack</div>
      <div className={styles.links}>
        <div className={styles.link}>Order</div>
        <div className={styles.link}>Contact</div>
        <div className={styles.link}>Cart</div>
        <div className={styles.link}>Sign In</div>
      </div>
    </header>
  )
}

export default Header
