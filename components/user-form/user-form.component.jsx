import styles from './user-form.module.scss'

const UserForm = () => {
  return (
    <form className={styles.userForm}>
      <div>
        <label>Email</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" required />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" required />
      </div>
      <div>
        <label>Street 1</label>
        <input type="text" name="street1" required />
      </div>
      <div>
        <label>Street 2</label>
        <input type="text" name="street2" required />
      </div>
      <div>
        <label>Suburb</label>
        <input type="text" name="suburb" required />
      </div>
      <div>
        <label>Province</label>
        <input type="text" name="province" required />
        <label>Postcode</label>
        <input type="text" name="postcode" required />
      </div>
      <div>
        <label>Phone number</label>
        <input
          type="number"
          minLength="10"
          maxLength="10"
          name="phone"
          required
        />
      </div>
      <button className={styles.orderButton} type="button">
        Order now
      </button>
    </form>
  )
}

export default UserForm
