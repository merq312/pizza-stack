import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import styles from './cart.module.scss'

const selectCartItems = () => {
  const cartItems = useSelector((state) => state.cartItems)
  return { cartItems }
}

const removeItemFromCart = () => {
  const dispatch = useDispatch()

  return (id) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
}

const Cart = ({ cartToggle }) => {
  const { cartItems } = selectCartItems()
  const removeItem = removeItemFromCart()
  const { cartHidden, toggleCartHidden } = cartToggle()

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        {cartItems.map((cartItem) => (
          <div className={styles.cartItem} key={cartItem.id}>
            <img src={cartItem.url} alt={cartItem.alt} />
            <div className={styles.itemName}>{cartItem.name}</div>
            <div className={styles.itemQuantity}>{cartItem.quantity}</div>
            <div
              className={styles.removeButton}
              onClick={() => removeItem(cartItem.id)}
            >
              X
            </div>
          </div>
        ))}
      </div>
      <Link href="/checkout">
        <div
          className={styles.checkoutButton}
          onClick={() => toggleCartHidden()}
        >
          Checkout
        </div>
      </Link>
    </div>
  )
}

export default Cart
