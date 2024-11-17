import React from 'react'
import styles from './MovieCard.module.scss'

const MovieCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Movie Title
      </div>
    </div>
  )
}

export default MovieCard