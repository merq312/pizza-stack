import { cartToggle, selectCartItemsCount } from '../../redux/selectors'
import Link from 'next/link'
import { useUser } from '../../lib/hooks'
import Cart from '../cart/cart.component'
import styles from './header.module.scss'

const Header = () => {
  const user = useUser()
  const { count } = selectCartItemsCount()
  const { cartHidden, toggleCartHidden } = cartToggle()

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
        <div className={styles.cartContainer}>
          <div
            className={styles.link}
            onClick={() => toggleCartHidden(!cartHidden)}
          >
            Cart ({count})
          </div>
          {cartHidden ? null : <Cart cartToggle={cartToggle} count={count} />}
        </div>
        {user ? (
          <Link href="/api/logout">
            <div className={styles.link}>Log Out</div>
          </Link>
        ) : (
          <Link href="/login">
            <div className={styles.link}>Log In</div>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
