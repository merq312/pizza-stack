import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.text}>Chamila Gunasena</div>
      <div className={styles.separator}>|</div>
      <div className={styles.text}>Cambrian College</div>
      <div className={styles.separator}>|</div>
      <div className={styles.text}>2021</div>
    </div>
  </footer>
)

export default Footer
