import React, { Component } from 'react'
import { scaleQuantile } from 'd3-scale'
import PropTypes from 'prop-types'
import HeatPoint from './HeatPoint'

class HeatPoints extends Component {
  onheatMouseOver = value => {
    const { heatMouseOver } = this.props
    heatMouseOver(value)
  }
  onheatMouseLeave = () => {
    this.props.heatMouseleave()
  }
  render() {
    const { varianceData, baseTemp, heatData, svgDimensions } = this.props

    const colors = [
      '#5e4fa2',
      '#3288bd',
      '#66c2a5',
      '#abdda4',
      '#e6f598',
      '#ffffbf',
      '#fee08b',
      '#fdae61',
      '#f46d43',
      '#d53e4f',
      '#9e0142',
    ]
    const colorScale = scaleQuantile()
      .domain([
        varianceData.minVariance + baseTemp,
        varianceData.maxVariance + baseTemp,
      ])
      .range(colors)
    const { innerWidth, innerHeight } = svgDimensions

    const heats = heatData.map(datum => (
      <HeatPoint
        key={`heat_item_${datum.year}_${datum.month}`}
        data={{
          year: datum.year,
          baseYear: heatData[0].year,
          month: datum.month,
          width: innerWidth,
          height: innerHeight,
          variance: datum.variance,
          dataTemperature: baseTemp,
          fillColor: colorScale(datum.variance + baseTemp),
        }}
        heatDataMouseEnter={this.onheatMouseOver}
        heatDataMouseLeave={this.onheatMouseLeave}
      />
    ))
    return <g>{heats}</g>
  }
}
HeatPoints.propTypes = {
  varianceData: PropTypes.shape({
    maxVariance: PropTypes.number,
    minVariance: PropTypes.number,
  }),
  svgDimensions: PropTypes.shape({
    height: PropTypes.number,
    innerHeight: PropTypes.number,
    innerWidth: PropTypes.number,
    width: PropTypes.number,
  }),
  heatData: PropTypes.arrayOf(
    PropTypes.shape({
      month: PropTypes.number,
      variance: PropTypes.number,
      year: PropTypes.number,
    })
  ),
  baseTemp: PropTypes.number,
  heatMouseOver: PropTypes.func,
  heatMouseleave: PropTypes.func,
}
export default HeatPoints
