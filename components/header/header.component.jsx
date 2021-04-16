import Link from 'next/link'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>
          <span>pizza</span>STACK
        </a>
      </Link>

      <div className={styles.links}>
        <Link href="/api/menu">
          <a className={styles.link}>API</a>
        </Link>
        <Link href="https://github.com/merq312/urban-barnacle">
          <a className={styles.link}>Contact</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Cart</a>
        </Link>
        <Link href="/">
          <a className={styles.link}>Sign In</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
