import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'
import styles from './scatter-style.module.css'

class ScatterAxis extends Component {
  componentDidMount() {
    this.renderAxis()
  }
  componentDidUpdate() {
    this.renderAxis()
  }
  renderAxis() {
    const { orient, scale } = this.props
    const axisType = `axis${orient}`
    const axis = d3Axis[axisType]()
      .scale(scale)
      .ticks(orient === 'Bottom' ? [6] : [8])
    d3Select(this.axisElement).call(axis)
  }
  render() {
    const { translate, orient } = this.props
    return (
      <g
        className={`${styles.Axis} ${styles.Axis}-${orient}`}
        ref={el => {
          this.axisElement = el
        }}
        transform={translate}
      />
    )
  }
}
ScatterAxis.propTypes = {
  orient: PropTypes.string,
  scale: PropTypes.func,
  translate: PropTypes.string,
}
export default ScatterAxis
