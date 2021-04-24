import {
  selectCartItems,
  removeItemFromCart,
  selectCartTotal,
} from '../../redux/selectors'
import Link from 'next/link'
import styles from './cart.module.scss'
import utilStyles from '../../styles/utils.module.scss'

const Cart = ({ cartToggle, count }) => {
  const { cartItems } = selectCartItems()
  const removeItem = removeItemFromCart()
  const { priceTotal } = selectCartTotal()
  const { cartHidden, toggleCartHidden } = cartToggle()

  return (
    <div className={styles.cart}>
      <div className={styles.cartContainer}>
        {count ? null : (
          <div className={utilStyles.noItemsText}>
            No items in
            <br />
            cart! :(
          </div>
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
              &#x2715;
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className={styles.priceTotal}>
          <span>Total</span> <span>${priceTotal}</span>
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
    </div>
  )
}

export default Cart
