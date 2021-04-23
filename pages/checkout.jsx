import UserForm from '../components/user-form/user-form.component'
import {
  selectCartItems,
  removeItemFromCart,
  selectCartItemsCount,
  selectCartTotal,
} from '../redux/selectors'
import styles from '../styles/Checkout.module.scss'
import utilStyles from '../styles/utils.module.scss'

const Checkout = () => {
  const { cartItems } = selectCartItems()
  const removeItem = removeItemFromCart()
  const { priceTotal } = selectCartTotal()
  const { count } = selectCartItemsCount()

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

      {count ? (
        <div className={styles.priceTotal}>
          <span>Total</span> <span>${priceTotal}</span>
        </div>
      ) : (
        <div className={utilStyles.noItemsText}>No items in cart! :(</div>
      )}

      <div className={utilStyles.separator} />
      <div className={styles.pageTitle}>Your Details</div>
      <div className={utilStyles.separator} />
      <UserForm />
    </main>
  )
}

export default Checkout
