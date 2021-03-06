import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class HeatPoint extends PureComponent {
  onHeatEnter = () => {
    const { data, heatDataMouseEnter } = this.props
    heatDataMouseEnter({
      temp: data.dataTemperature,
      variance: data.variance,
      year: data.year,
      month: data.month,
      toolColor: data.fillColor,
      baseTemp: data.dataTemperature,
    })
  }
  onHeatLeave = () => {
    this.props.heatDataMouseLeave()
  }
  render() {
    const { data } = this.props
    const xValue = (data.year - data.baseYear) * data.width
    const yValue = (data.month - 1) * data.height
    return (
      <rect
        key={`heat_item_${data.year}_${data.month}`}
        x={xValue}
        y={yValue}
        height={data.height}
        width={data.width}
        fill={data.fillColor}
        onMouseOver={this.onHeatEnter}
        onFocus={this.onHeatEnter}
        onMouseOut={this.onHeatLeave}
        onBlur={this.onHeatLeave}
      />
    )
  }
}
HeatPoint.propTypes = {
  data: PropTypes.shape({
    year: PropTypes.number,
    baseYear: PropTypes.number,
    month: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    variance: PropTypes.number,
    dataTemperature: PropTypes.number,
    fillColor: PropTypes.string,
  }),
  heatDataMouseEnter: PropTypes.func,
  heatDataMouseLeave: PropTypes.func,
}
export default HeatPoint
