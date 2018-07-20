import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class County extends PureComponent {
  static propTypes = {
    countyData: PropTypes.shape({
      statename: PropTypes.string,
      countyname: PropTypes.string,
      educationdata: PropTypes.number,
      id: PropTypes.number,
    }),
    clearToolTipData: PropTypes.func,
    setToolTipData: PropTypes.func,
  }

  onMouseOverHandler = () => {
    const { countyData, setToolTipData } = this.props
    setToolTipData({
      namestate: countyData.countyInfo.statename,
      county: countyData.countyInfo.countyname,
      percentage: countyData.countyInfo.educationdata,
    })
  }
  onMouseOutHandler = () => {
    this.props.clearToolTipData()
  }
  render() {
    const { countyData } = this.props
    return (
      <path
        key={`path_:${countyData.id}`}
        d={countyData.dpath}
        fill={countyData.fillInfo}
        data-fips={countyData.id}
        data-education={countyData.countyInfo.educationdata}
        className="county"
        onMouseOver={this.onMouseOverHandler}
        onMouseOut={this.onMouseOutHandler}
        onFocus={this.onMouseOverHandler}
        onBlur={this.onMouseOutHandler}
      />
    )
  }
}
export default County
