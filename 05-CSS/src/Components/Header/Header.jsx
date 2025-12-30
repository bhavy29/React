import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
      <h3>Hello!!</h3>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header
