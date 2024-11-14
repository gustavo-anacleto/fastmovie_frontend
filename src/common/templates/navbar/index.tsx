import React from "react"
import styles from './Navbar.module.scss'
import { Link } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";

const loginIconProps = {
  color: "white",
  size: "3rem"
}

const Navbar: React.FC  = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.toolbar}>
          <h1 className={styles['toolbar-logo']}>FASTICKET</h1>
          
          <div className={styles['toolbar-links']}>
            <Link to={""} className={styles['toolbar-link']}>Movies</Link>
            <Link to={""} className={styles['toolbar-link']}>My Appointments</Link>
          </div>

          <div className={styles['toolbar-login-container']}>
            <Link to={""} className={styles['toolbar-link']}>LogIn</Link>
            <FaRegUserCircle {...loginIconProps}/>
          </div>
      </nav>
    </header>
  )
}

export default Navbar