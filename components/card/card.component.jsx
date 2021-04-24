import { addItemToCart } from '../../redux/selectors'
import styles from './card.module.scss'

const Card = (item) => {
  const addItem = addItemToCart()

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={item.url} alt={item.alt} />
        <div className={styles.itemPrice}>${item.price}</div>
        {item.value ? (
          <div className={styles.value}>
            <span>value</span>
          </div>
        ) : null}
        {item.vegetarian ? (
          <div className={styles.vegetarian}>
            <span>veg</span>
          </div>
        ) : null}
      </div>
      <div className={styles.itemName}>{item.name}</div>
      <div className={styles.cartButton} onClick={() => addItem(item)}>
        <div className={styles.cartText}>Add to Cart</div>
      </div>
    </div>
  )
}

export default Card
