import React from 'react'
import Helmet from 'react-helmet'
import ScatterChartContainer from '../components/Challenges/ScatterChartView/ScatterChartContainer'

const ScatterChartPage = () => {
  return (
    <div>
      <Helmet
        title="Super Duper Scatter Chart"
        meta={[
          {
            name: 'description',
            content: 'freeCodeCamp DataVis Challenges,Scatter Chart',
          },
          {
            name: 'keywords',
            content: 'react, gatsby,challenges,d3,scatter chart',
          },
          { name: 'author', content: 'jonniebigodes' },
        ]}
      />
      <ScatterChartContainer />
    </div>
  )
}
export default ScatterChartPage
