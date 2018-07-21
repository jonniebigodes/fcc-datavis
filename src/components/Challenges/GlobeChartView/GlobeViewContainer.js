import { geoMercator, geoPath } from 'd3-geo'
import React, { Component } from 'react'
import { feature } from 'topojson-client'
import Utilities from '../../../Utils/Utilities'
import Preload from '../../Preloader/index'
import GlobeViewChart from './GlobeViewChart'
import MeteorToolTip from './MeteorToolTip'
import styles from './globe-style.module.css'

class GlobeViewContainer extends Component {
  // #region component methods
  state = {
    isLoading: true,
    isError: false,
    isToolTipActive: false,
    meteorInfo: {},
    chartWidth: 0,
    chartHeight: 0,
    meteors: [],
    globeMap: [],
    mapData: [],
    meteorData: [],
  }
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setChartDimensions()
      window.addEventListener('resize', this.setChartDimensions)
    }
    setTimeout(() => {
      const storedMap = JSON.parse(Utilities.getStorageData('globeMap'))
      const meteorsData = JSON.parse(Utilities.getStorageData('meteors'))
      if (!storedMap) {
        this.fetchData()
        this.fetchDataMeteor()
      } else {
        const updatedMap = storedMap.map((d, i) => {
          return {
            dpath: geoPath().projection(this.project())(d),
            fillInfo: `rgba(38,50,56,${(1 / storedMap.length) * i})`,
          }
        })
        const meteorPoints = meteorsData.map(d => {
          return {
            name: d.properties.name,
            mass: parseInt(d.properties.mass, 10),
            date: d.properties.year,
            meteorClass: d.properties.recclass,
            radius: this.calculateRadius(parseInt(d.properties.mass, 10)),
            latitude: this.project()([
              Number(d.properties.reclong),
              Number(d.properties.reclat),
            ])[0],
            longitude: this.project()([
              Number(d.properties.reclong),
              Number(d.properties.reclat),
            ])[1],
            fillOp: parseInt(d.properties.mass, 10) <= 179687.5 ? 1 : 0.5,
          }
        })
        this.setState({
          meteors: meteorPoints,
          meteorData: meteorsData,
          globeMap: updatedMap,
          mapData: storedMap,
        })
        /* this.setState(prevState=>({
                    globeMap:storedMap,
                    meteors:meteorsData,
                    meteors:meteorPoints,
                    globeMap:updatedMap,
                })); */
      }
    }, 2500)
  }
  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setChartDimensions)
    }
  }
  // #endregion

  // #region chart dimensioning
  setChartWidth = value => {
    return value * 0.8
  }
  setChartDimensions = () => {
    const { chartWidth } = this.state
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

      if (currentWidth !== chartWidth) {
        this.setState({
          chartWidth: currentWidth,
          chartHeight: currentHeight,
        })
      }
    } else {
      currentWidth = window.innerWidth >= 960 ? 900 : window.innerWidth
      currentHeight = this.setChartWidth(window.innerHeight)
      if (currentWidth !== chartWidth) {
        this.setState({
          chartWidth: currentWidth,
          chartHeight: currentHeight,
        })
      }
    }
    this.updateMap()
  }
  project() {
    const { chartWidth, chartHeight } = this.state
    if (chartWidth < 768) {
      return geoMercator()
        .scale(chartWidth)
        .translate([chartWidth / 2, chartHeight / 2])
    }
    return geoMercator()
      .scale(100)
      .translate([chartWidth / 2, chartHeight / 2])
  }
  updateMap = () => {
    const { mapData, meteorData } = this.state
    const updatedMap = mapData.map((d, i) => {
      return {
        dpath: geoPath().projection(this.project())(d),
        fillInfo: `rgba(38,50,56,${(1 / mapData.length) * i})`,
      }
    })
    const meteorPoints = meteorData.map(d => {
      return {
        name: d.properties.name,
        mass: parseInt(d.properties.mass, 10),
        date: d.properties.year,
        meteorClass: d.properties.recclass,
        radius: this.calculateRadius(parseInt(d.properties.mass, 10)),
        latitude: this.project()([
          Number(d.properties.reclong),
          Number(d.properties.reclat),
        ])[0],
        longitude: this.project()([
          Number(d.properties.reclong),
          Number(d.properties.reclat),
        ])[1],
        fillOp: parseInt(d.properties.mass, 10) <= 179687.5 ? 1 : 0.5,
      }
    })
    this.setState({ meteors: meteorPoints, globeMap: updatedMap })
  }
  calculateRadius = value => {
    const range = 179687.5

    switch (true) {
      case value <= range:
        return 2
      case value <= range * 2:
        return 4
      case value <= range * 3:
        return 6
      case value <= range * 20:
        return 8
      case value <= range * 100:
        return 8
      default:
        return 12
    }
  }
  // #endregion

  // #region fetch data
  fetchDataMeteor() {
    fetch('https://data.nasa.gov/resource/y77d-th95.geojson')
      .then(response => {
        return response.json()
      })
      .then(result => {
        const meteorPoints = result.features.map(d => {
          return {
            name: d.properties.name,
            mass: parseInt(d.properties.mass, 10),
            date: d.properties.year,
            meteorClass: d.properties.recclass,
            radius: this.calculateRadius(parseInt(d.properties.mass, 10)),
            latitude: this.project()([
              Number(d.properties.reclong),
              Number(d.properties.reclat),
            ])[0],
            longitude: this.project()([
              Number(d.properties.reclong),
              Number(d.properties.reclat),
            ])[1],
            fillOp: parseInt(d.properties.mass, 10) <= 179687.5 ? 1 : 0.5,
          }
        })
        Utilities.setStorageData('meteors', result.features)
        this.setState({
          meteors: meteorPoints,
          meteorData: result.features,
        })
      })
      .catch(err => {
        console.log('====================================')
        console.log(
          `error getting the meteors data:${JSON.stringify(err, null, 2)}`
        )
        console.log('====================================')
        this.setState({ isError: true })
      })
  }

  fetchData() {
    fetch('https://d3js.org/world-50m.v1.json')
      .then(response => {
        return response.json()
      })
      .then(result => {
        const pathsGlobe = feature(result, result.objects.countries).features

        console.log('====================================')
        console.log(
          `pathsglobe features=>${JSON.stringify(pathsGlobe, null, 2)}`
        )
        console.log('====================================')

        const formattedMap = pathsGlobe.map((d, i) => {
          return {
            dpath: geoPath().projection(this.project())(d),
            fillInfo: `rgba(38,50,56,${(1 / pathsGlobe.length) * i})`,
          }
        })
        Utilities.setStorageData('globeMap', pathsGlobe)
        this.setState({
          globeMap: formattedMap,
          mapData: pathsGlobe,
        })
      })
      .catch(err => {
        console.log('====================================')
        console.log(
          `error getting the chart data:${JSON.stringify(err, null, 2)}`
        )
        console.log('====================================')
        this.setState({ isError: true })
      })
  }
  // #endregion

  // #region visibility
  activateToolTip = value => {
    this.setState({ isToolTipActive: true, meteorInfo: value })
  }
  disableToolTip = () => {
    this.setState({ isToolTipActive: false, meteorInfo: {} })
  }
  handlePreloadShutdown = () => {
    this.setState({
      isLoading: false,
    })
  }
  // #endregion

  // #region render
  render() {
    const {
      isError,
      isLoading,
      globeMap,
      meteors,
      isToolTipActive,
      meteorInfo,
      chartWidth,
      chartHeight,
    } = this.state
    if (isError) {
      return (
        <div className={styles.globeTitle}>
          Lights up the sirens.....Something went wrong
        </div>
      )
    }
    if (isLoading) {
      return (
        <Preload
          chartName="world"
          turnDownPreload={this.handlePreloadShutdown}
        />
      )
    }

    if (globeMap.length) {
      return (
        <div
          ref={el => {
            this.chartContainer = el
          }}>
          <div className={styles.globeTitle}>Meteor hits across the globe</div>
          <div className={styles.containerGlobe}>
            <div>
              <GlobeViewChart
                svgWidth={chartWidth}
                svgHeight={chartHeight}
                globeData={globeMap}
                meteorsInfo={meteors}
                showToolTip={this.activateToolTip}
                hideToolTip={this.disableToolTip}
              />
            </div>
            <div>
              <MeteorToolTip data={isToolTipActive ? meteorInfo : null} />
            </div>
          </div>
        </div>
      )
    }
  }
  // #endregion
}
export default GlobeViewContainer
