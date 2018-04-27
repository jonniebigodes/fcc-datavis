import Link from 'gatsby-link';
import React from 'react';
import styles from './index-module.module.css';
const IndexPage = () => (

    <div className={styles.containerIndex}>
      <div className={styles.textIndex}>
        freeCodecamp Data Visualization Projects
      </div>
      <div className={styles.projects}>
        <div className={styles.boxIndex}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/viewbarchart/">Bar Chart Project</Link></div>
        </div>
        <div className={styles.boxIndex}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/viewscatter/">Scatterplot Graph Project</Link></div>
        </div>
        <div className={styles.boxIndex}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/heatview/">Heat Chart Project</Link></div>
        </div>
        <div className={styles.boxIndex}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/forceview/">Force Directed Chart Project</Link></div>
        </div>
        <div className={styles.boxIndex}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/globeview/">Globe Chart Project</Link></div>
        </div>
      </div>
    </div>
)

export default IndexPage
