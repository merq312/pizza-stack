import { useState } from 'react'
import Router from 'next/router'
import { useUser } from '../lib/hooks'
import { Magic } from 'magic-sdk'

import styles from '../styles/LogIn.module.scss'
import utilStyles from '../styles/utils.module.scss'

const LogIn = () => {
  useUser({ redirectTo: '/', redirectIfFound: true })

  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')
    const body = {
      email: e.currentTarget.email.value,
    }

    try {
      const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY)
      const didToken = await magic.auth.loginWithMagicLink({
        email: body.email,
      })
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
        body: JSON.stringify(body),
      })
      if (res.status === 200) {
        Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error occured: ', error)
      setErrorMsg(error.message)
    }
  }

  return (
    <main className={styles.main}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.pageTitle}>Sign Up / Log In</div>
        <div className={utilStyles.separator} />
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>

        <button type="submit" className={styles.loginButton}>
          Sign Up / Log In
        </button>
        {errorMsg && <p className="error">{errorMsg}</p>}
      </form>
    </main>
  )
}

export default LogIn
