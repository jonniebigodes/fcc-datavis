import React from 'react'
import styles from './footer-style.module.css'

const Footer = () => (
  <footer className={styles.foots}>
    <div className={styles.footerText}>
      Made by{' '}
      <a
        href="https://www.freecodecamp.com/jonniebigodes"
        target="_noopener"
        rel="nofollow">
        Jonniebigodes
      </a>
    </div>
    <div className={styles.footerText}>
      Github repository:{' '}
      <a
        href="https://github.com/jonniebigodes/fcc-datavis"
        target="_noopener"
        rel="nofollow">
        Data Visualization Challenges
      </a>
    </div>
  </footer>
)

export default Footer
