import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Nav.module.css'
const Nav = () => {
  return (
    <div className={styles.nav}>
        <Link  to='/' className={styles.Link1} >Kalvium Books📚</Link>
        <Link to='/register'className={styles.Link}>Register</Link>
    </div>
  )
}

export default Nav
