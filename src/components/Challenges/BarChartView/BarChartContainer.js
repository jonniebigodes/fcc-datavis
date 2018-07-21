import React, { Component } from 'react'
import Utilities from '../../../Utils/Utilities'
import Preload from '../../Preloader/index'
import ErrorViewer from '../../ErrorViewer/ViewError'
import BarChartToolTip from './BarToolTip'
import DataVisBarChart from './DataVisBarChart'
import styles from './bar-style.module.css'

class BarChartContainer extends Component {
  // #region component methods
  state = {
    isLoading: true,
    isError: false,
    fullchartData: [],
    isToolTipActive: false,
    gdpInfo: {},
    chartWidth: 0,
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setChartDimensions()
      window.addEventListener('resize', this.setChartDimensions)
    }
    setTimeout(() => {
      const storedbars = JSON.parse(Utilities.getStorageData('barsdata'))
      if (!storedbars) {
        this.fetchData()
      } else {
        const storedBarsData = storedbars.map(item => {
          return {
            dateTime: item.dateTime,
            domesticValue: Number(item.domesticValue),
          }
        })
        this.setState({
          fullchartData: storedBarsData,
        })
      }
    }, 2500)
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setChartDimensions)
    }
  }
  // #endregion

  // #region chart resize method handlers
  setChartWidth = value => {
    return value * 0.8
  }
  setChartDimensions = () => {
    const { chartWidth } = this.state
    let currentWidth = 0
    if (this.chartContainer) {
      currentWidth = this.chartContainer.getBoundingClientRect().width
      currentWidth =
        this.chartContainer.getBoundingClientRect().width <= 768
          ? this.setChartWidth(
              this.chartContainer.getBoundingClientRect().width
            )
          : this.chartContainer.getBoundingClientRect().width

      if (currentWidth !== chartWidth) {
        this.setState({
          chartWidth: currentWidth,
        })
      }
    } else {
      currentWidth = window.innerWidth >= 960 ? 900 : window.innerWidth
      if (currentWidth !== chartWidth) {
        this.setState({
          chartWidth: currentWidth,
        })
      }
    }
  }
  // #endregion

  // #region data fetch
  fetchData() {
    fetch(
      'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json'
    )
      .then(response => {
        return response.json()
      })
      .then(result => {
        const itemsResult = result.data.map(item => {
          return {
            dateTime: item[0],
            domesticValue: Number(item[1].toFixed(2)),
          }
        })
        Utilities.setStorageData('barsdata', itemsResult)
        this.setState({
          fullchartData: itemsResult,
        })
      })
      .catch(error => {
        //
        console.log('====================================')
        console.log(
          `error getting the barchart data:${JSON.stringify(error, null, 2)}`
        )
        console.log('====================================')
        this.setState({ isError: true })
      })
  }
  // #endregion

  // #region visibility and render
  activateToolTip = value => {
    this.setState({ isToolTipActive: true, gdpInfo: value })
  }
  deactivateToolTip = () => {
    this.setState({ isToolTipActive: false, gdpInfo: {} })
  }
  handlePreloadShutdown = () => {
    this.setState({ isLoading: false })
  }
  render() {
    const {
      isError,
      isLoading,
      fullchartData,
      isToolTipActive,
      gdpInfo,
      chartHeight,
      chartWidth,
    } = this.state
    if (isError) {
      return <ErrorViewer />
    }
    if (isLoading) {
      return (
        <Preload chartName="bar" turnDownPreload={this.handlePreloadShutdown} />
      )
    }
    if (fullchartData.length) {
      return (
        <div
          ref={el => {
            this.chartContainer = el
          }}
          className={styles.BarShow}>
          <div className={styles.BarTitle}>
            Federal Reserve Economic Data on Gross Domestic Product in the USA
          </div>
          <div className={styles.containerBar}>
            <div>
              <DataVisBarChart
                dataChart={fullchartData}
                enableToolTip={this.activateToolTip}
                disableToolTip={this.deactivateToolTip}
                chartDimensions={{
                  svgWidth: chartWidth,
                  svgHeight: chartHeight,
                }}
              />
            </div>

            <div>
              <BarChartToolTip data={isToolTipActive ? gdpInfo : null} />
            </div>
          </div>
          <p>
            <span className={styles.BarFooterText}>
              Units: Billions of Dollars. Seasonal Adjustment: Seasonally
              Adjusted Annual Rate Notes: A Guide to the National Income and
              Product Accounts of the United States (NIPA)
              (http://www.bea.gov/national/pdf/nipaguid.pdf)
            </span>
          </p>
        </div>
      )
    }
  }
  // #endregion
}
export default BarChartContainer
