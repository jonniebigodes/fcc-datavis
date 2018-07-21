import React from 'react'
import Helmet from 'react-helmet'
import GlobeViewContainer from '../components/Challenges/GlobeChartView/GlobeViewContainer'

const GlobeGraphPage = () => {
  return (
    <div>
      <Helmet
        title="Super Duper Globe Map"
        meta={[
          {
            name: 'description',
            content: 'freeCodeCamp DataVis Challenges,Globe Map,meteors',
          },
          {
            name: 'keywords',
            content: 'react, gatsby,challenges,d3,globe map',
          },
          { name: 'author', content: 'jonniebigodes' },
        ]}
      />
      <GlobeViewContainer />
    </div>
  )
}
export default GlobeGraphPage
