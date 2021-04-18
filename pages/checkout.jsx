import { useSelector, useDispatch } from 'react-redux'
import UserForm from '../components/user-form/user-form.component'

import styles from '../styles/Checkout.module.scss'
import utilStyles from '../styles/utils.module.scss'

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

const Checkout = () => {
  const { cartItems } = selectCartItems()
  const removeItem = removeItemFromCart()

  return (
    <main className={styles.main}>
      <div className={styles.pageTitle}>Checkout</div>
      <div className={utilStyles.separator} />

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

      <div className={utilStyles.separator} />
      <div className={styles.pageTitle}>Your Details</div>
      <div className={utilStyles.separator} />
      <UserForm />
    </main>
  )
}

export default Checkout
