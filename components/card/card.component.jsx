import styles from './card.module.scss'

const Card = (menuList) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={menuList.url} alt={menuList.alt} />
      </div>
      <div className={styles.itemName}>{menuList.name}</div>
      <div className={styles.cartButton}>
        <div className={styles.cartText}>Add to Cart</div>
      </div>
    </div>
  )
}

export default Card
