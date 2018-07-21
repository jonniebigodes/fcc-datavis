import React from 'react'
import Helmet from 'react-helmet'
import BarChartContainer from '../components/Challenges/BarChartView/BarChartContainer'

const BarchartPage = () => {
  return (
    <div>
      <Helmet
        title="Super Duper Bar Chart"
        meta={[
          {
            name: 'description',
            content: 'freeCodeCamp DataVis Challenges,Bar Chart',
          },
          {
            name: 'keywords',
            content: 'react, gatsby,challenges,d3,bar chart',
          },
          { name: 'author', content: 'jonniebigodes' },
        ]}
      />
      <BarChartContainer />
    </div>
  )
}
export default BarchartPage
