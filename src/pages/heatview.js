import React from 'react'
import Helmet from 'react-helmet'
import HeatMapChartContainer from '../components/Challenges/HeatMapChartView/HeatMapChartContainer'

const HeatMapPage = () => {
  return (
    <div>
      <Helmet
        title="Super Duper Heat Map"
        meta={[
          {
            name: 'description',
            content: 'freeCodeCamp DataVis Challenges,Heat Map Chart',
          },
          { name: 'keywords', content: 'react, gatsby,challenges,d3,Heatmap' },
          { name: 'author', content: 'jonniebigodes' },
        ]}
      />
      <HeatMapChartContainer />
    </div>
  )
}
export default HeatMapPage
