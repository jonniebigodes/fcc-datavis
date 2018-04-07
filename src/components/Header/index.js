import React from 'react';
import Link from 'gatsby-link';
import styles from './header-style.module.css';
const Header = () => (
  <div className={styles.header}
    // style={{
    //   //background: 'rebeccapurple',
    //   background:'#06691b',
    //   marginBottom: '1.15rem',
    // }}
  >
    <div className={styles.containerDataVis}
      // style={{
      //   margin: '0 auto',
      //   maxWidth: 960,
      //   padding: '1.15rem 1.0875rem',
      // }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Supercalifragilistic Data Visualization
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
