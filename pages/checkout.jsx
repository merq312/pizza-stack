import UserForm from '../components/user-form/user-form.component'
import {
  selectCartItems,
  removeItemFromCart,
  selectCartItemsCount,
} from '../redux/selectors'
import styles from '../styles/Checkout.module.scss'
import utilStyles from '../styles/utils.module.scss'

const Checkout = () => {
  const { cartItems } = selectCartItems()
  const removeItem = removeItemFromCart()
  const { count } = selectCartItemsCount()

  return (
    <main className={styles.main}>
      <div className={styles.pageTitle}>Checkout</div>
      <div className={utilStyles.separator} />

      {count ? null : (
        <div className={utilStyles.noItemsText}>No items in cart! :(</div>
      )}
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
