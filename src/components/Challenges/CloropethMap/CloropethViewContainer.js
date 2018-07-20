import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountyMap from './CountyMap'
import CloroLegend from './Clorolegend'
import CloroToolTip from './CloroTooltip'
import ErrorViewer from '../../ErrorViewer/ViewError'

class CloroPethContainer extends Component {
  static propTypes = {
    widthchart: PropTypes.number,
    appLoading: PropTypes.bool,
    appError: PropTypes.bool,
    fetchMapData: PropTypes.func,
    resizeChart: PropTypes.func,
  }

  // #region component guard methods
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setMapDimensions()
      window.addEventListener('resize', this.setMapDimensions)
    }
    this.props.fetchMapData()
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setMapDimensions)
    }
  }
  // #endregion

  // #region chart dimension
  setChartWidth = value => {
    return value * 0.8
  }
  setMapDimensions = () => {
    const { widthchart, resizeChart } = this.props
    let currentWidth = 0
    let currentHeight = 0
    if (this.chartContainer) {
      currentWidth = this.chartContainer.getBoundingClientRect().width
      currentHeight = this.chartContainer.getBoundingClientRect().height
      currentWidth =
        this.chartContainer.getBoundingClientRect().width <= 768
          ? this.setChartWidth(
              this.chartContainer.getBoundingClientRect().width
            )
          : this.chartContainer.getBoundingClientRect().width
      currentHeight =
        this.chartContainer.getBoundingClientRect().width <= 768
          ? this.setChartWidth(
              this.chartContainer.getBoundingClientRect().height
            )
          : this.chartContainer.getBoundingClientRect().height
      if (currentWidth !== widthchart) {
        resizeChart(currentWidth, currentHeight)
      }
    } else {
      currentWidth = window.innerWidth >= 960 ? 900 : window.innerWidth
      currentHeight = this.setChartWidth(window.innerHeight)
      if (currentWidth !== widthchart) {
        resizeChart(currentWidth, currentHeight)
      }
    }
  }
  // #endregion

  render() {
    const { appError, appLoading } = this.props
    if (appError) {
      return <ErrorViewer />
    }
    if (appLoading) {
      return <h3>getting data</h3>
    }
    return (
      <div
        ref={el => {
          this.chartContainer = el
        }}>
        <div id="title">United States Educational Attainment</div>
        <div id="description">
          Percentage of adults age 25 and older with a bachelor&#39;s degree or
          higher (2010-2014)
        </div>
        <div>
          <CloroLegend />
        </div>
        <div>
          <CountyMap />
        </div>
        <div>
          <CloroToolTip />
        </div>
      </div>
    )
  }
}
export default CloroPethContainer
