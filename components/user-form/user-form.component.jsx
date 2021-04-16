import styles from './user-form.module.scss'

const UserForm = () => {
  return (
    <form className={styles.userForm}>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" name="lastName" />
      </div>
      <div>
        <label>Street 1</label>
        <input type="text" name="street1" />
      </div>
      <div>
        <label>Street 2</label>
        <input type="text" name="street2" />
      </div>
      <div>
        <label>Suburb</label>
        <input type="text" name="suburb" />
      </div>
      <div>
        <label>Province</label>
        <input type="text" name="province" />
        <label>Postcode</label>
        <input type="text" name="postcode" />
      </div>
      <div>
        <label>Phone number</label>
        <input type="number" minLength="10" maxLength="10" name="phone" />
      </div>
      <button className={styles.order} type="button">
        Order now
      </button>
    </form>
  )
}

export default UserForm
