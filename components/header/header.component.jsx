import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Link from 'next/link'
import Cart from '../cart/cart.component'
import styles from './header.module.scss'

// NOTE: Should this be memoized?
const selectCartItemsCount = () => {
  const count = useSelector((state) =>
    state.cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
  )
  return { count }
}

/*
const useCounter = () => {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const increment = () =>
    dispatch({
      type: 'INCREMENT',
    })

  return { count, increment }
}
*/

const Header = () => {
  const { count } = selectCartItemsCount()
  const [cartHidden, toggleCartHidden] = useState(1)

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
          {cartHidden ? null : <Cart />}
        </div>
        <div className={styles.link}>Sign In</div>
      </div>
    </header>
  )
}

export default Header
