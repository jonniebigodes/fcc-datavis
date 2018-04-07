import React from 'react';
import styles from './footer-style.module.css';
const Footer = () => (
  <footer className={styles.footerText}>
      <div>
        Made by <a href="https://www.freecodecamp.com/jonniebigodes" target="_blank" rel="nofollow">Jonniebigodes</a>
      </div>
      <div>
        Github repository: <a href="https://github.com/jonniebigodes/fcc-datavis" target="_blank" rel="nofollow">Data Visualization Challenges</a>
      </div>
  </footer>
)

export default Footer;
