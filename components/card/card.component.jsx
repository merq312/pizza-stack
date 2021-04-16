import styles from './card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src="./pizza-1.jpg" alt="pizza-1" />
      </div>
      <div className={styles.itemName}>Classic Pepperoni</div>
      <div className={styles.cartButton}>
        <div className={styles.cartText}>Add to Cart</div>
      </div>
    </div>
  )
}

export default Card
