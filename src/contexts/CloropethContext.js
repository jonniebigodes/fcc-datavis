import React, { Component } from 'react'
import Axios from 'axios'
import { geoPath } from 'd3-geo'
import { feature, mesh } from 'topojson-client'
import { scaleThreshold, scaleLinear } from 'd3-scale'
import { range as datarange } from 'd3-array'
import { schemeBlues as bluecolors } from 'd3-scale-chromatic'

export const CloroContext = React.createContext()

export class CloroProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isloading: true,
      isError: false,
      ToolTipActive: false,
      cloroLegendData: [],
      dataToolTip: {},
      countyData: [],
      statesData: '',
      chartWidth: 0,
      chartHeight: 0,
    }
    this.pathGeo = geoPath()
  }

  setDimensions = (valuewidth, valueHeight) => {
    this.setState({
      chartWidth: valuewidth,
      chartHeight: valueHeight,
    })
  }
  getcountyInfo = (countyvalue, education) => {
    const result = education.find(x => x.fips === countyvalue)
    return result.bachelorsOrHigher
      ? {
          statename: result.state,
          countyname: result.area_name,
          educationdata: result.bachelorsOrHigher,
        }
      : { statename: '', countyname: '', educationdata: 0 }
  }
  enableToolTip = value => {
    this.setState({ ToolTipActive: true, dataToolTip: value })
  }
  disableToolTip = () => {
    this.setState({ ToolTipActive: false, dataToolTip: {} })
  }
  handlePreloaderClose = () => {
    this.setState({ isloading: false })
  }
  fetchMapData = () => {
    Axios.all([
      Axios.get(
        'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/counties.json'
      ),
      Axios.get(
        'https://raw.githubusercontent.com/no-stack-dub-sack/testable-projects-fcc/master/src/data/choropleth_map/for_user_education.json'
      ),
    ])
      .then(
        Axios.spread((counties, education) => {
          const datacounties = counties.data
          const pathscounties = feature(
            datacounties,
            datacounties.objects.counties
          ).features
          const pathsstates = mesh(
            datacounties,
            datacounties.objects.states,
            (a, b) => a !== b
          )
          const countycolours = scaleThreshold()
            .domain(datarange(2.6, 75.1, (75.1 - 2.6) / 8))
            .range(bluecolors[9])
          const legendData = scaleLinear()
            .domain([2.6, 75.1])
            .rangeRound([600, 860])
          const parsedStates = this.pathGeo(pathsstates)

          const legendColours = countycolours.range().map((e, i) => {
            e = countycolours.invertExtent(e)
            const [a, b] = legendData.domain()
            if (e[0] == null) e[0] = a
            if (e[1] == null) e[1] = b
            return {
              educationcolor: i === 0 ? '#eee' : countycolours(e[0]),
              educationpercentage:
                i < 8 ? `${Math.round(countycolours.domain()[i])}%` : '>66%',
              cellX: i === 0 ? legendData(e[0]) - 35 : legendData(e[0]),
            }
          })

          const parsedCounties = pathscounties.map(item => {
            const countyData = this.getcountyInfo(item.id, education.data)
            return {
              dpath: this.pathGeo(item),
              id: item.id,
              fillInfo: countycolours(countyData.educationdata),
              countyInfo: countyData,
            }
          })

          this.setState({
            countyData: parsedCounties,
            statesData: parsedStates,
            cloroLegendData: legendColours,
          })
        })
      )
      .catch(error => {
        console.log('====================================')
        console.log(
          `error getting the chart data:${JSON.stringify(
            error.message,
            null,
            2
          )}`
        )
        console.log('====================================')
        this.setState({ isError: true })
      })
  }
  render() {
    return (
      <CloroContext.Provider
        value={{
          ...this.state,
          getData: this.fetchMapData,
          activateToolTip: this.enableToolTip,
          deactivateToolTip: this.disableToolTip,
          setChart: this.setDimensions,
          closePreloader: this.handlePreloaderClose,
        }}>
        {this.props.children}
      </CloroContext.Provider>
    )
  }
}
