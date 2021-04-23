import { useDispatch } from 'react-redux'
import styles from './card.module.scss'

const useCart = () => {
  const dispatch = useDispatch()

  const addToCart = (item) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    })

  return { addToCart }
}

const Card = (item) => {
  const { addToCart } = useCart()

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
      <div className={styles.cartButton} onClick={() => addToCart(item)}>
        <div className={styles.cartText}>Add to Cart</div>
      </div>
    </div>
  )
}

export default Card
