import Link from 'gatsby-link'
import React from 'react'
import styles from './index-module.module.css'

const IndexPage = () => (
  <div className={styles.containerIndex}>
    <div className={styles.textIndex}>
      freeCodecamp Data Visualization Projects
    </div>
    <div className={styles.projects}>
      {[
        {
          name: 'Bar Chart Project',
          linkLocation: '/viewbarchart/',
          id: 'barchart',
        },
        {
          name: 'Scatterplot Graph Project',
          linkLocation: '/viewscatter/',
          id: 'scatterchart',
        },
        {
          name: 'Heat Chart Project',
          linkLocation: '/heatview/',
          id: 'heatchart',
        },
        {
          name: 'Force Directed Chart Project',
          linkLocation: '/forceview/',
          id: 'forcechart',
        },
        {
          name: 'Globe Chart Project',
          linkLocation: '/globeview/',
          id: 'mapchart',
        },
        {
          name: 'Treemap Project',
          linkLocation: 'viewtreemap',
          id: 'treemapchart',
        },
        {
          name: 'Cloropeth Project',
          linkLocation: 'viewcloro',
          id: 'cloropethchart',
        },
      ].map(item => (
        <div className={styles.boxIndex} key={`pr_${item.id}`}>
          <div className={styles.textContainer}>
            Placeholder to get you to the...
          </div>
          <div className={styles.textContainer}>
            <Link to={item.linkLocation}>{item.name}</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default IndexPage
