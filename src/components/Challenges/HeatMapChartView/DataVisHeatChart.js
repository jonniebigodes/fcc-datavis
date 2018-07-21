import React, { Component } from 'react'
import { scaleBand } from 'd3-scale'
import PropTypes from 'prop-types'
import HeatAxes from './HeatAxes'
import HeatPoints from './HeatPoints'
import { dataVisConstant } from '../../../Utils/Constants'

class DataVisHeatChart extends Component {
  onMouseOver = value => {
    const { showToolTip } = this.props

    showToolTip(value)
  }
  onMouseLeave = () => {
    const { hideToolTip } = this.props

    hideToolTip()
  }
  // findMin = () => {
  //   const { dataChart } = this.props
  //   let min = Number.POSITIVE_INFINITY
  //   let high = Number.NEGATIVE_INFINITY
  //   let tmp = 0
  //   for (const item in dataChart.monthlyVariance) {
  //     tmp = dataChart.monthlyVariance[item].variance
  //     if (tmp < min) {
  //       min = tmp
  //     }
  //     if (tmp > high) {
  //       high = tmp
  //     }
  //   }

  //  return { minVariance: min, maxVariance: high }
  // }
  // countDups = () => {
  //   const { dataChart } = this.props
  //   const items = []
  //   let current = 0
  //   for (const item in dataChart.monthlyVariance) {
  //     current = dataChart.monthlyVariance[item].year

  //     const isPresent = items.find(x => x == current)
  //     if (!isPresent) {
  //       items.push(current)
  //     }
  //   }
  //   return items.length
  // }
  render() {
    const { dataChart, svgWidth } = this.props
    const { baseTemperature, monthlyVariance } = dataChart
    // const baseTemperature = dataChart.baseTemperature
    // const minDate = new Date(monthlyVariance[0].year, 0)
    // const maxDate = new Date(monthlyVariance[monthlyVariance.length - 1].year,0)
    const databyYears = monthlyVariance.reduce(
      (x, i) => (x.findIndex(e => e.year === i.year) < 0 ? [...x, i] : x),
      []
    ).length

    // const databyYears = this.countDups()
    // const dataIntervals = this.findMin()
    const maxValue = Math.max(...monthlyVariance.map(i => i.variance))
    const minValue = Math.min(...monthlyVariance.map(x => x.variance))
    const dataIntervals = { minVariance: minValue, maxVariance: maxValue }
    // console.log('====================================');
    // console.log(`dataIntervals=>${JSON.stringify(dataIntervals,null,2)}\nmax value=>${JSON.stringify(maxValue,null,2)}\n minValue=>${JSON.stringify(minValue,null,2)}`);
    // console.log('====================================');
    const margin = {
      top: 30,
      right: 10,
      bottom: 40,
      left: 50,
    }
    const svgDimensions = {
      width: Math.max(svgWidth, 300),
      height: 450,
      innerWidth: 0,
      innerHeight: 0,
    }
    // console.log(`tempdatayears=>$${JSON.stringify(tempDataYears,null,2)} databyYears=>${databyYears}`);

    svgDimensions.innerHeight =
      svgDimensions.height / dataVisConstant.Months.length
    svgDimensions.innerWidth = svgDimensions.width / databyYears

    const xScale = scaleBand()
      .domain(monthlyVariance.map(e => e.year))
      .range([0, svgDimensions.width - 1])
    /* const xScale = scaleTime()
      .domain([minDate, maxDate]).range([0, svgDimensions.width - 1]).rangeRound([0,svgDimensions.width]) */
    const yScale = scaleBand()
      .domain(dataVisConstant.Months)
      .range([0, svgDimensions.height])
    return (
      <svg
        width={svgDimensions.width + margin.left + margin.right}
        height={svgDimensions.height + margin.top + margin.bottom}
        viewBox={`0 0 ${svgDimensions.width +
          margin.left +
          margin.right} ${svgDimensions.height + margin.top + margin.bottom}`}
        preserveAspectRatio="xMidYMid meet"
        className="animated bounceInLeft">
        <HeatAxes
          scales={{ xScale, yScale }}
          margins={margin}
          svgDimensions={svgDimensions}
        />´
        <HeatPoints
          varianceData={dataIntervals}
          svgDimensions={svgDimensions}
          heatData={dataChart.monthlyVariance}
          baseTemp={baseTemperature}
          heatMouseOver={this.onMouseOver}
          heatMouseleave={this.onMouseLeave}
        />
      </svg>
    )
  }
}
DataVisHeatChart.propTypes = {
  svgWidth: PropTypes.number,
  dataChart: PropTypes.shape({
    baseTemperature: PropTypes.number,
    monthlyVariance: PropTypes.arrayOf(
      PropTypes.shape({
        month: PropTypes.number,
        variance: PropTypes.number,
        year: PropTypes.number,
      })
    ),
  }),
  showToolTip: PropTypes.func,
  hideToolTip: PropTypes.func,
}
export default DataVisHeatChart
