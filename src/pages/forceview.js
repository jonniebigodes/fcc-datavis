import React from 'react'
import Helmet from 'react-helmet'
import ForceDirectContainer from '../components/Challenges/ForceDirectChartView/ForceDirectContainer'
import styles from './index-module.module.css'

const ForceGraphPage = () => {
  return (
    <div className={styles.containerPageForce}>
      <Helmet
        title="Super Duper Force Graph"
        meta={[
          {
            name: 'description',
            content: 'freeCodeCamp DataVis Challenges,Force graph',
          },
          {
            name: 'keywords',
            content: 'react, gatsby,challenges,d3,force graph',
          },
          { name: 'author', content: 'jonniebigodes' },
        ]}
      />
      <ForceDirectContainer />
    </div>
  )
}
export default ForceGraphPage
